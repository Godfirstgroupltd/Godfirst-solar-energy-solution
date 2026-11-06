import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GODFIRST SOLAR & ENERGY LTD",
  description: "Privacy policy and client data protection practices of GODFIRST SOLAR & ENERGY LTD and GODFIRST GROUP LTD.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
        LEGAL &amp; DATA GOVERNANCE
      </span>
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1 mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm font-sans font-light text-brand-black/80 leading-relaxed">
        <p>
          At GODFIRST SOLAR &amp; ENERGY LTD (a division of GODFIRST GROUP LTD, Nigeria), we hold client privacy with the utmost seriousness. This document outlines how we collect, store, and safeguard your engineering information and telemetry data.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          1. Information We Collect
        </h2>
        <p>
          When you request a quote, load audit, or technical consultation, we collect personal and property details including your name, contact telephone, email address, installation location, and electrical equipment inventory.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          2. Solar Telemetry Data
        </h2>
        <p>
          For commissioned installations utilizing cloud telemetry gateways, our systems stream operational metrics including solar photovoltaic yield (kW), battery state of charge (SoC), and AC voltage frequencies. This data is utilized solely for proactive maintenance, fault diagnostics, and warranty verification.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          3. Non-Disclosure &amp; Security
        </h2>
        <p>
          We never sell, rent, or lease client data to third parties. All inquiries and system specifications are treated as confidential corporate and residential records under the Nigerian Data Protection Regulation (NDPR).
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          4. Contact Us
        </h2>
        <p>
          For inquiries regarding your personal data or telemetry records, contact our compliance desk at{" "}
          <a href="mailto:godfirst.groupltd@gmail.com" className="text-brand-slate underline">
            godfirst.groupltd@gmail.com
          </a>{" "}
          or call 08082312819.
        </p>
      </div>
    </div>
  );
}
