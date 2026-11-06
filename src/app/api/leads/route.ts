import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

// Simple in-memory rate limiting (max 5 submissions per IP per 10 minutes)
const ipRateLimit = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();

    // Check rate limit
    const existing = ipRateLimit.get(ip);
    if (existing && existing.expiresAt > now) {
      if (existing.count >= 5) {
        return NextResponse.json(
          { error: "Too many quote requests. Please wait a few minutes or call 08082312819." },
          { status: 429 }
        );
      }
      existing.count += 1;
    } else {
      ipRateLimit.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    }

    const body = await request.json();
    const {
      name,
      phone,
      email,
      location,
      topology,
      service,
      timeline,
      message,
      peakDemandKw,
      recInverterKva,
      recBatteryKwh,
      inventory,
      honeypot,
    } = body;

    // Honeypot check: If bot filled the hidden honeypot field, drop silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Request received." });
    }

    // Required fields check
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone number, and email address are required." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase (if configured)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    let dbSuccess = false;

    if (supabaseUrl && !supabaseUrl.includes("placeholder")) {
      const supabaseAdmin = createAdminClient();
      const { error: dbError } = await supabaseAdmin.from("leads").insert([
        {
          name,
          phone,
          email,
          location,
          topology,
          service: service || "General Quote",
          timeline,
          message,
          peak_demand_kw: peakDemandKw || 0,
          rec_inverter_kva: recInverterKva || 0,
          rec_battery_kwh: recBatteryKwh || 0,
          inventory: inventory || {},
          status: "New",
        },
      ]);
      if (!dbError) dbSuccess = true;
    }

    // 2. Email Notification to godfirst.groupltd@gmail.com
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Godfirst Solar Desk <alerts@godfirstsolar.com>",
            to: ["godfirst.groupltd@gmail.com"],
            subject: `[NEW SOLAR QUOTE] ${name} (${location}) - ${recInverterKva || 5}kVA Request`,
            text: `NEW INBOUND SOLAR SIZING QUOTE:\n\nClient Name: ${name}\nPhone / WhatsApp: ${phone}\nEmail: ${email}\nLocation: ${location}\nTopology: ${topology}\nPackage/Service: ${service}\nTimeline: ${timeline}\nPeak Demand: ${peakDemandKw} kW\nRecommended Inverter: ${recInverterKva} kVA\nRecommended Battery: ${recBatteryKwh} kWh\n\nClient Notes: ${message}\n`,
          }),
        });
      } catch (e) {
        console.error("Resend notification error:", e);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Engineering quote request logged successfully.",
      dbSaved: dbSuccess,
    });
  } catch (error: any) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { error: "Failed to process quote request. Please call 08082312819." },
      { status: 500 }
    );
  }
}

