import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Engagement | GODFIRST SOLAR & ENERGY LTD",
  description: "Terms of engineering engagement, equipment warranty, and installation standards of GODFIRST SOLAR & ENERGY LTD.",
};

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
        STANDARDS &amp; ENGAGEMENT
      </span>
      <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1 mb-8">
        Terms of Engagement
      </h1>

      <div className="space-y-6 text-sm font-sans font-light text-brand-black/80 leading-relaxed">
        <p>
          Welcome to GODFIRST SOLAR &amp; ENERGY LTD (&ldquo;the Company&rdquo;), a subsidiary of GODFIRST GROUP LTD (EST. 2026). By booking a consultation, requesting a quote, or commissioning an installation, you agree to these Terms of Engagement.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          1. Engineering Integrity &amp; Site Assessment
        </h2>
        <p>
          All component sizing and energy harvest calculations are estimates based on standard solar irradiance models and client-provided appliance inventories. Prior to physical installation, an authorized engineer conducts an on-site structural and electrical validation.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          2. Hardware Warranties
        </h2>
        <p>
          We provide genuine Tier-1 hardware backed by manufacturer warranties: 25-year linear performance warranty on solar panels, 5-to-10-year design life on LiFePO4 lithium batteries, and standard replacement warranties on hybrid inverters. Warranties require adherence to recommended maintenance protocols.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          3. Earthing &amp; Lightning Protection
        </h2>
        <p>
          To maintain electrical safety compliance under COREN and NEMSA guidelines, all turnkey installations require certified deep earth pits with resistance below 5 Ohms and Type-2 surge protection. Modifications by unauthorized third-party technicians void the electrical installation guarantee.
        </p>

        <h2 className="font-heading font-semibold text-lg text-brand-black pt-4">
          4. Contact Information
        </h2>
        <p>
          For contractual clarifications, contact{" "}
          <a href="mailto:godfirst.groupltd@gmail.com" className="text-brand-slate underline">
            godfirst.groupltd@gmail.com
          </a>{" "}
          or our operations line: 08082312819.
        </p>
      </div>
    </div>
  );
}
