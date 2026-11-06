import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  BatteryCharging,
  Zap,
  Grid3X3,
  Wrench,
  FileCheck,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Activity,
  Layers,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Foundation Black with full-bleed solar photo & dark overlay) */}
      <section className="relative bg-brand-black text-brand-offwhite overflow-hidden py-24 sm:py-32 lg:py-36">
        {/* Full-bleed background photo with dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE3r-KkMOZWvJVfOMh0NpqwM_GRFcsSQ-NQ28mxKwVi4FCaI5ID1SXk5FOVoa8TUqHLiTQF3oLa5vmQ8hmaxj2yBNceJ5zXbAUpcVT1YY9vcojTNjBrlMZ289y3Wr8Bxgq-fBZT3nVwUVq6np3odzE45tQCxlzm8fzvKNs-V_-f3NQ6hFpSc7ViUBi7XZeux4uPLcdBfNFrfKPuqbHvikX3PQMgbqGTk6ArsjK0g"
            alt="Lagos luxury residential solar installation by Godfirst Solar"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Quiet Division Pill */}
              <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 border border-brand-taupe/30 bg-brand-black/60 text-brand-taupe">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-slate" />
                <span className="font-sans font-light uppercase tracking-ultra text-[10px] text-brand-offwhite">
                  GODFIRST SOLAR &amp; ENERGY LTD
                </span>
              </div>

              {/* Strict Brand Tagline */}
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-offwhite tracking-tight leading-[1.08]">
                Power that lasts.
              </h1>

              <p className="font-sans font-light text-base sm:text-lg text-brand-offwhite/85 max-w-xl leading-relaxed">
                Reliable solar engineering for Nigerian homes and businesses. Say goodbye to unpredictable grid collapse and soaring diesel generator costs with Tier-1 lithium and hybrid systems engineered for 25+ years of uninterrupted power.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?intent=quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-all shadow-subtle"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:08082312819"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-brand-taupe/40 text-brand-offwhite hover:border-brand-offwhite transition-colors font-heading text-xs font-medium tracking-wide"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-taupe" />
                  <span>Call 08082312819</span>
                </a>
              </div>

              {/* Subtle Trust Standards */}
              <div className="pt-6 border-t border-brand-taupe/20 flex flex-wrap items-center gap-6 text-xs font-sans text-brand-taupe">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-offwhite" />
                  <span className="text-brand-offwhite/90">Tier-1 Monocrystalline</span>
                </div>
                <div className="flex items-center gap-2">
                  <BatteryCharging className="w-4 h-4 text-brand-offwhite" />
                  <span className="text-brand-offwhite/90">LiFePO4 Lithium Chemistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-offwhite" />
                  <span className="text-brand-offwhite/90">Sub-4ms Transfer Time</span>
                </div>
              </div>
            </div>

            {/* Right Card: High-Voltage Installation Snapshot */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-brand-taupe/30 bg-brand-black/80 p-6 sm:p-8 backdrop-blur-sm shadow-card">
                <div className="flex items-center justify-between pb-4 border-b border-brand-taupe/20">
                  <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                    DEPLOYMENT TELEMETRY
                  </span>
                  <span className="text-[10px] font-sans text-brand-offwhite/70">
                    Live Status
                  </span>
                </div>

                <div className="space-y-4 py-5 text-sm">
                  <div>
                    <p className="text-xs text-brand-taupe">Benchmark Project</p>
                    <p className="font-heading font-semibold text-brand-offwhite text-base">
                      Banana Island 15kVA 3-Phase Microgrid
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="border border-brand-taupe/20 p-3">
                      <p className="text-[10px] text-brand-taupe uppercase tracking-wider">Generator Offset</p>
                      <p className="font-heading font-bold text-lg text-brand-offwhite">100% Day</p>
                    </div>
                    <div className="border border-brand-taupe/20 p-3">
                      <p className="text-[10px] text-brand-taupe uppercase tracking-wider">Lithium Storage</p>
                      <p className="font-heading font-bold text-lg text-brand-offwhite">20.4 kWh</p>
                    </div>
                  </div>

                  <p className="text-xs font-sans text-brand-taupe/90 leading-relaxed pt-1">
                    Delivered with zero-flicker ATS changeover, pure copper DC earthing, and continuous cloud telemetry.
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-taupe/20 flex items-center justify-between text-xs">
                  <span className="text-brand-taupe">COREN Reg. Lead Engineer</span>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-brand-offwhite hover:text-brand-taupe transition-colors font-medium"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP (Quiet Luxury Card Grid on Off-White Canvas) */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-brand-offwhite border border-brand-taupe/30 shadow-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-l-2 border-brand-slate pl-4">
            <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight">
              500+
            </span>
            <p className="font-heading font-semibold text-sm text-brand-black mt-1">
              Turnkey Installations
            </p>
            <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
              Energized across 18+ Nigerian states with zero downtime records.
            </p>
          </div>

          <div className="border-l-2 border-brand-taupe pl-4">
            <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight">
              100%
            </span>
            <p className="font-heading font-semibold text-sm text-brand-black mt-1">
              Client Peace of Mind
            </p>
            <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
              Engineered changeover, zero micro-surge, and industrial grounding.
            </p>
          </div>

          <div className="border-l-2 border-brand-slate pl-4">
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight">
                15+
              </span>
              <span className="font-heading font-semibold text-sm text-brand-black">Yrs</span>
            </div>
            <p className="font-heading font-semibold text-sm text-brand-black mt-1">
              Master Technicians
            </p>
            <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
              Registered COREN clean energy and high-voltage power engineers.
            </p>
          </div>

          <div className="border-l-2 border-brand-taupe pl-4">
            <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight">
              24/7
            </span>
            <p className="font-heading font-semibold text-sm text-brand-black mt-1">
              Telemetry &amp; SLA Support
            </p>
            <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
              Active rapid-response teams in Lagos, Abuja, and Port Harcourt.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER & BRAND HERITAGE */}
      <section className="py-24 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Brand Story Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              HERITAGE &amp; PHILOSOPHY
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-tight">
              Put God first, excellence will follow.
            </h2>

            <p className="font-sans font-light text-base text-brand-black/80 leading-relaxed">
              From solar to data to design, we build foundations that endure. GODFIRST SOLAR &amp; ENERGY LTD is committed to solving Nigeria&apos;s power challenge through uncompromising electrical engineering, Grade-A component procurement, and dedicated post-commissioning maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20">
                <p className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate mb-1">
                  VALUE 01
                </p>
                <p className="font-heading font-bold text-base text-brand-black">Trusted</p>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
                  Bankable specifications with zero counterfeit components.
                </p>
              </div>

              <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20">
                <p className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate mb-1">
                  VALUE 02
                </p>
                <p className="font-heading font-bold text-base text-brand-black">Timeless</p>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
                  Systems calibrated to run reliably 10 to 25+ years.
                </p>
              </div>

              <div className="p-4 border border-brand-taupe/20 bg-brand-divine/20">
                <p className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-slate mb-1">
                  VALUE 03
                </p>
                <p className="font-heading font-bold text-base text-brand-black">Foundation</p>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
                  Structural integrity, precision cabling, and surge earthing.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black tracking-wide border-b border-brand-slate pb-1 transition-colors"
              >
                <span>Read our full brand story and Group vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Architectural Solar Tile */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-brand-taupe/30 p-2 bg-brand-offwhite">
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8xYuUUcWVnUSI5eAkHUBAklWeHIkh54TgO19swz06tE_ejkre9TjLswKN3xCUY6DcrJM-MKIBoAKIObcPeSXpvDaFZwCvDOEK8oXXZ0QfUT9qZsbIaMLgNDID89SVM7Xa1S30Eol98qNmxqzX9KtNmoNxDbdvmjvbUvfTwdeDJgktK7VbbbMc5-SntDOom36I9XPwgp7HnnW0Ltbwta-cOkLQnls5073TPbn0OA"
                  alt="Godfirst Solar Lead Engineer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 bg-brand-black text-brand-offwhite">
                <p className="font-sans font-light uppercase tracking-ultra text-[9px] text-brand-taupe">
                  TECHNICAL STANDARDS
                </p>
                <p className="font-heading font-semibold text-sm mt-0.5 text-brand-offwhite">
                  COREN Registered Electrical Engineers
                </p>
                <p className="font-sans font-light text-xs text-brand-taupe mt-1">
                  Every installation is audited for harmonic stability, cable load rating, and lightning surge dissipation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES (Off-White & Slate/Black 2-Color Rule) */}
      <section className="py-20 bg-brand-black text-brand-offwhite" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand-taupe/20">
            <div>
              <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
                ENGINEERING CAPABILITIES
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-offwhite tracking-tight mt-1">
                Complete clean energy solutions.
              </h2>
            </div>
            <p className="font-sans font-light text-sm text-brand-taupe max-w-md">
              From residential penthouses to hospital complexes, we design and deploy utility-grade electrical architectures tailored to Nigerian conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {/* Service 1 */}
            <div className="border border-brand-taupe/20 p-8 flex flex-col justify-between hover:border-brand-taupe/60 transition-colors bg-brand-black">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-brand-taupe/30 text-brand-offwhite mb-6">
                  <Grid3X3 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite">
                  Solar Panel Installation
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  High-efficiency mono-PERC and TOPCon panels installed on precision aluminum racking with marine-grade fasteners resilient to coastal humidity.
                </p>
              </div>
              <Link
                href="/services/solar-panel-installation"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe transition-colors pt-6"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="border border-brand-taupe/20 p-8 flex flex-col justify-between hover:border-brand-taupe/60 transition-colors bg-brand-black">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-brand-taupe/30 text-brand-offwhite mb-6">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite">
                  Inverter &amp; Battery Systems
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  Pure sine wave hybrid inverters combined with prismatic LiFePO4 cells offering 6,000+ deep cycles and smart cloud telemetry.
                </p>
              </div>
              <Link
                href="/services/inverter-battery-systems"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe transition-colors pt-6"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="border border-brand-taupe/20 p-8 flex flex-col justify-between hover:border-brand-taupe/60 transition-colors bg-brand-black">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-brand-taupe/30 text-brand-offwhite mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite">
                  Solar Street Lighting
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  Autonomous commercial perimeter and estate streetlights with integrated MPPT controllers and IP67 weather-sealed enclosures.
                </p>
              </div>
              <Link
                href="/services/solar-street-lights"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe transition-colors pt-6"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="border border-brand-taupe/20 p-8 flex flex-col justify-between hover:border-brand-taupe/60 transition-colors bg-brand-black">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-brand-taupe/30 text-brand-offwhite mb-6">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite">
                  Maintenance &amp; Repairs
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  FLIR thermal imaging to detect diode hot-spots, battery cell rebalancing, inverter firmware updates, and scheduled maintenance SLAs.
                </p>
              </div>
              <Link
                href="/services/maintenance-repairs"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe transition-colors pt-6"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="border border-brand-taupe/20 p-8 flex flex-col justify-between hover:border-brand-taupe/60 transition-colors bg-brand-black">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-brand-taupe/30 text-brand-offwhite mb-6">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite">
                  Solar Consultation
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  Comprehensive electrical load audits, harmonic measurement, ROI payback modeling, and institutional single-line engineering diagrams (SLD).
                </p>
              </div>
              <Link
                href="/services/solar-consultation"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-offwhite hover:text-brand-taupe transition-colors pt-6"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service 6: Inquire Custom Architecture */}
            <div className="border border-brand-slate bg-brand-slate/20 p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                  BESPOKE ARCHITECTURE
                </span>
                <h3 className="font-heading font-bold text-xl text-brand-offwhite mt-2">
                  Have a custom industrial or microgrid requirement?
                </h3>
                <p className="font-sans font-light text-sm text-brand-taupe mt-3 leading-relaxed">
                  Our senior engineering leads conduct on-site irradiance modeling and transformer changeover synchronisation for 50kVA–500kVA setups.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-brand-slate text-brand-offwhite hover:bg-brand-offwhite hover:text-brand-black transition-colors font-heading text-xs font-semibold tracking-wide"
              >
                <span>Schedule Engineering Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US WITH FREE LOAD QUOTE CARD */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="quote-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Why Choose Us Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              PRECISION &amp; INTEGRITY
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight leading-tight">
              Why leading Nigerian property owners trust GODFIRST.
            </h2>
            <p className="font-sans font-light text-base text-brand-black/80 leading-relaxed">
              Solar energy isn&apos;t just about panels on a roof; it is precision electrical engineering designed to safeguard your appliances, protect your investment, and run 24 hours a day without hiccups.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-slate/40 flex items-center justify-center shrink-0 text-brand-slate">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-brand-black">
                    Certified Grade-A Components Only
                  </h4>
                  <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                    Zero counterfeit panels or recycled cells. Every module is factory-calibrated Tier-1 with real wattage guaranteed under Nigerian tropical ambient heat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-slate/40 flex items-center justify-center shrink-0 text-brand-slate">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-brand-black">
                    Precision Cable Trenching &amp; Earthing
                  </h4>
                  <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                    UV-resistant pure tinned copper DC cabling, dedicated Type-2 surge arrestors (SPDs), and deep earth pit grounding below 5 Ohms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-slate/40 flex items-center justify-center shrink-0 text-brand-slate">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-brand-black">
                    Dedicated After-Sales Technical SLA
                  </h4>
                  <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                    Guaranteed 24-hour technician dispatch across our regional depots in Lagos, Abuja, and Port Harcourt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-slate/40 flex items-center justify-center shrink-0 text-brand-slate">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-brand-black">
                    Transparent Sizing &amp; Phased Delivery
                  </h4>
                  <p className="font-sans font-light text-xs text-brand-black/70 mt-1 leading-relaxed">
                    No deceptive wattage metrics. We calculate real running and surge draw so your system never trips when inductive loads start.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Free Solar Quote Form Card (Off-White & Slate) */}
          <div className="lg:col-span-6 bg-brand-black text-brand-offwhite border border-brand-taupe/30 p-8 sm:p-10 shadow-card">
            <div className="border-b border-brand-taupe/20 pb-4 mb-6">
              <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                DIRECT QUOTE DESK
              </span>
              <h3 className="font-heading font-bold text-2xl text-brand-offwhite mt-1">
                Request an Engineering Quote
              </h3>
              <p className="font-sans font-light text-xs text-brand-taupe mt-1">
                Receive an accurate single-line sizing assessment from a certified engineer within 24 hours.
              </p>
            </div>

            <form
              action="/contact"
              method="GET"
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-sans text-brand-taupe mb-1">
                  Full Name / Organisation
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Chief Babatunde Adeleke"
                  className="w-full px-3.5 py-2.5 bg-brand-black border border-brand-taupe/30 text-brand-offwhite text-sm focus:border-brand-offwhite focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-brand-taupe mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0808 231 2819"
                    className="w-full px-3.5 py-2.5 bg-brand-black border border-brand-taupe/30 text-brand-offwhite text-sm focus:border-brand-offwhite focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-brand-taupe mb-1">
                    Installation City / State
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Lekki Phase 1, Lagos"
                    className="w-full px-3.5 py-2.5 bg-brand-black border border-brand-taupe/30 text-brand-offwhite text-sm focus:border-brand-offwhite focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-brand-taupe mb-1">
                  Property Topology / System Requirement
                </label>
                <select
                  name="service"
                  className="w-full px-3.5 py-2.5 bg-brand-black border border-brand-taupe/30 text-brand-offwhite text-sm focus:border-brand-offwhite focus:outline-none"
                >
                  <option value="Home Basic">Residential: Home Basic (3kVA – 5kVA)</option>
                  <option value="Home Plus">Residential: Home Plus (7.5kVA – 10kVA)</option>
                  <option value="Commercial Hub">Commercial / Industrial Microgrid (15kVA – 100kVA+)</option>
                  <option value="Solar Street Lighting">Solar Street Lighting &amp; Perimeter</option>
                  <option value="Maintenance & Audit">Maintenance, Battery Audit &amp; Repair</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans text-brand-taupe mb-1">
                  Primary Appliances to Power
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="e.g. 2 Inverter ACs, 1 Double-door fridge, 1HP borehole pump, TVs, laptops, lighting..."
                  className="w-full px-3.5 py-2.5 bg-brand-black border border-brand-taupe/30 text-brand-offwhite text-sm focus:border-brand-offwhite focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
                >
                  Calculate &amp; Send Sizing Request
                </button>
              </div>

              <p className="text-[11px] font-sans text-brand-taupe/70 text-center pt-1">
                Direct phone escalation: <a href="tel:08082312819" className="text-brand-offwhite underline">08082312819</a> • No spam guarantee.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERED PACKAGES PREVIEW (No fixed prices, 'Request Price' opens quote) */}
      <section className="py-24 bg-brand-divine/25 border-y border-brand-taupe/20" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              STANDARDIZED ARCHITECTURES
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1">
              Engineered solar packages calibrated for your load.
            </h2>
            <p className="font-sans font-light text-sm text-brand-black/75 mt-3">
              Standardized configurations engineered with Tier-1 components. Customised based on your property&apos;s physical roof orientation and electrical distribution board.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Package 1: Home Basic */}
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 flex flex-col justify-between shadow-subtle">
              <div>
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                  RESIDENTIAL ESSENTIAL
                </span>
                <h3 className="font-heading font-bold text-2xl text-brand-black mt-1">
                  Home Basic
                </h3>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-2">
                  Engineered for apartments, flats, and smaller homes requiring reliable round-the-clock power.
                </p>

                <div className="my-6 py-4 border-y border-brand-taupe/20 space-y-1.5 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Inverter:</span>
                    <span className="font-medium text-brand-black">3.5kVA – 5kVA Pure Sine</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Lithium Battery:</span>
                    <span className="font-medium text-brand-black">5.12 kWh LiFePO4 Rack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Solar Array:</span>
                    <span className="font-medium text-brand-black">4–6x 550W Tier-1 Mono</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs font-sans text-brand-black/80">
                  <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider mb-2">
                    What&apos;s Covered:
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>LED lighting across all rooms &amp; perimeter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Standing &amp; ceiling fans (all bedrooms)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Energy-efficient inverter refrigerator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Smart TVs, soundbar &amp; home WiFi routers</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact?package=Home+Basic"
                  className="block w-full py-3 text-center border border-brand-slate text-brand-slate font-heading text-xs font-semibold tracking-wide hover:bg-brand-slate hover:text-brand-offwhite transition-colors"
                >
                  Request Price for Home Basic
                </Link>
              </div>
            </div>

            {/* Package 2: Home Plus (Featured Card in Foundation Black) */}
            <div className="border border-brand-black bg-brand-black text-brand-offwhite p-8 flex flex-col justify-between shadow-card relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-brand-slate text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-ultra">
                Most Requested
              </div>

              <div>
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                  RESIDENTIAL PREMIUM
                </span>
                <h3 className="font-heading font-bold text-2xl text-brand-offwhite mt-1">
                  Home Plus
                </h3>
                <p className="font-sans font-light text-xs text-brand-taupe mt-2">
                  Engineered for 4–5 bedroom duplexes requiring air conditioning, deep freeze, and automatic pumping.
                </p>

                <div className="my-6 py-4 border-y border-brand-taupe/20 space-y-1.5 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-brand-taupe">Inverter:</span>
                    <span className="font-medium text-brand-offwhite">7.5kVA – 10kVA Hybrid</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-taupe">Lithium Battery:</span>
                    <span className="font-medium text-brand-offwhite">10.24 kWh – 15 kWh LiFePO4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-taupe">Solar Array:</span>
                    <span className="font-medium text-brand-offwhite">10–14x 550W Tier-1 Mono</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs font-sans text-brand-offwhite/90">
                  <p className="font-heading font-semibold text-xs text-brand-offwhite uppercase tracking-wider mb-2">
                    What&apos;s Covered:
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                    <span>1 to 2 Inverter air conditioners (day/night)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                    <span>Chest deep freezer &amp; double-door fridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                    <span>0.75HP–1HP domestic borehole water pump</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-taupe shrink-0" />
                    <span>CCTV security cameras, electric fence &amp; gate</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact?package=Home+Plus"
                  className="block w-full py-3.5 text-center bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
                >
                  Request Price for Home Plus
                </Link>
              </div>
            </div>

            {/* Package 3: Commercial Hub */}
            <div className="border border-brand-taupe/30 bg-brand-offwhite p-8 flex flex-col justify-between shadow-subtle">
              <div>
                <span className="font-sans font-light uppercase tracking-ultra text-[9.5px] text-brand-taupe">
                  COMMERCIAL &amp; INDUSTRIAL
                </span>
                <h3 className="font-heading font-bold text-2xl text-brand-black mt-1">
                  Commercial Hub
                </h3>
                <p className="font-sans font-light text-xs text-brand-black/70 mt-2">
                  Engineered for clinics, supermarkets, multi-tenant corporate offices, and hospitality facilities.
                </p>

                <div className="my-6 py-4 border-y border-brand-taupe/20 space-y-1.5 text-xs font-sans">
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Inverter:</span>
                    <span className="font-medium text-brand-black">15kVA – 50kVA 3-Phase</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Lithium Battery:</span>
                    <span className="font-medium text-brand-black">20.4 kWh – 60+ kWh Storage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-black/70">Solar Array:</span>
                    <span className="font-medium text-brand-black">16–48x High-Voltage Mono</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs font-sans text-brand-black/80">
                  <p className="font-heading font-semibold text-xs text-brand-black uppercase tracking-wider mb-2">
                    What&apos;s Covered:
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Multiple high-capacity inverter AC suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Commercial cold rooms &amp; medical refrigeration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Elevators, high-pressure pumps &amp; server racks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-slate shrink-0" />
                    <span>Automated generator peak-load shaving sync</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact?package=Commercial+Hub"
                  className="block w-full py-3 text-center border border-brand-slate text-brand-slate font-heading text-xs font-semibold tracking-wide hover:bg-brand-slate hover:text-brand-offwhite transition-colors"
                >
                  Request Price for Commercial Hub
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black tracking-wide border-b border-brand-slate pb-1 transition-colors"
            >
              <span>Compare detailed technical specs across all packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS SHOWCASE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="projects">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-taupe/20 pb-8">
          <div>
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              DEPLOYED INFRASTRUCTURE
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1">
              Field-proven installations across Nigeria.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black tracking-wide border-b border-brand-slate pb-1 transition-colors"
          >
            <span>Explore full project gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE3r-KkMOZWvJVfOMh0NpqwM_GRFcsSQ-NQ28mxKwVi4FCaI5ID1SXk5FOVoa8TUqHLiTQF3oLa5vmQ8hmaxj2yBNceJ5zXbAUpcVT1YY9vcojTNjBrlMZ289y3Wr8Bxgq-fBZT3nVwUVq6np3odzE45tQCxlzm8fzvKNs-V_-f3NQ6hFpSc7ViUBi7XZeux4uPLcdBfNFrfKPuqbHvikX3PQMgbqGTk6ArsjK0g"
                alt="15kVA 3-Phase Luxury Villa in Banana Island Ikoyi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-black/80 text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider backdrop-blur-sm">
                Banana Island, Lagos
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-brand-slate font-medium mb-1.5">
                <span>15kVA 3-Phase Hybrid</span>
                <span>20.4 kWh Storage</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black">
                Private Waterfront Ultra-Luxury Villa
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Complete eradication of nocturnal generator noise. Seamless sub-4ms transfer powering multi-zone HVAC and home automation.
              </p>
              <div className="mt-4 pt-3 border-t border-brand-taupe/20 flex items-center justify-between text-xs">
                <span className="text-brand-taupe">Diesel Cut: 100% Day</span>
                <Link
                  href="/projects/banana-island-villa"
                  className="font-medium text-brand-black hover:text-brand-slate inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfZmcUTvLIYpaZjoblxrZsWec1y4ZZsdQ-kdSGIC5kXkCB2gdpZSWex99CKdi7MvqGca7E2T2kcjJmRe00wYOHyIpBRtGGENOka-4JrPzn10d6Jk4nrsLJDbT3POuC76zRdb2cqBNdOQLyk4VMOCA1NLQ_bHjmdYNMk4qdHD0Bz2X8q9hNvCRg0zY902kO6y-jWfVHi1jsfZV4YLHln9QZmS_9AzJCMVLXxAxlEQ"
                alt="25kVA Medical Grade Hybrid Microgrid in Garki Abuja"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-black/80 text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider backdrop-blur-sm">
                Garki Area 11, Abuja FCT
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-brand-slate font-medium mb-1.5">
                <span>25kVA Medical Grade</span>
                <span>35 kWh LiFePO4</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black">
                Garki Specialist Clinic &amp; ICU Backup
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Zero downtime guarantee for ICU ventilators, neonatal incubators, and laboratory cold storage without generator delay.
              </p>
              <div className="mt-4 pt-3 border-t border-brand-taupe/20 flex items-center justify-between text-xs">
                <span className="text-brand-taupe">Monthly Savings: ₦850k</span>
                <Link
                  href="/projects/garki-clinic-microgrid"
                  className="font-medium text-brand-black hover:text-brand-slate inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-brand-taupe/30 bg-brand-offwhite group">
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLN4DWW_eHFKzYKRM4bbPbmFer2VvDVpmGPISkZs5wCEoZAzLOd0v8GXY9DRdaEJgHnWmCPsGd9Iik_FhzktfA5ZbZQ3XHBq9PXmC7o83xvErtdLPWe8QxdlwFPhzpzwgYWvxaiCTs11BaB3yqERnbzgMBxqjhF_p4AoNedrNjOu1ljAIugXbzW_pS33mCbw3Hech5WUGWA1f1McumAvUNT3W-Iwy6czdst5G4oQ"
                alt="60kWp Ground Mount Array & Industrial Backup in Challawa Kano"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-black/80 text-brand-offwhite text-[9.5px] font-sans font-light uppercase tracking-wider backdrop-blur-sm">
                Challawa Industrial, Kano
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-brand-slate font-medium mb-1.5">
                <span>50kVA Parallel Inverter</span>
                <span>80 kWh Storage</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-black">
                Grain Processing Plant &amp; Storage
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-2 leading-relaxed">
                Mitigates northern grid voltage sags for grain drying blowers and automated packaging conveyors.
              </p>
              <div className="mt-4 pt-3 border-t border-brand-taupe/20 flex items-center justify-between text-xs">
                <span className="text-brand-taupe">Monthly Savings: ₦1.4M</span>
                <Link
                  href="/projects/kano-grain-storage"
                  className="font-medium text-brand-black hover:text-brand-slate inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 4-STAGE ENGINEERING DELIVERY PROCESS */}
      <section className="py-24 bg-brand-black text-brand-offwhite border-t border-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
              STANDARDIZED OPERATING PROCEDURE
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-offwhite tracking-tight mt-1">
              From consultation to round-the-clock power in 4 steps.
            </h2>
            <p className="font-sans font-light text-sm text-brand-taupe mt-3">
              We never guess wattage or cut corners with undersized cables. Every installation adheres to rigorous electrical safety codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-brand-taupe/20 p-6 bg-brand-black">
              <span className="font-heading font-bold text-2xl text-brand-taupe">01</span>
              <h4 className="font-heading font-semibold text-lg text-brand-offwhite mt-3">
                Free Consultation &amp; Load Audit
              </h4>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                We tabulate running and surge wattage across all inductive equipment (compressors, borehole pumps, air conditioners) to prevent breaker tripping.
              </p>
            </div>

            <div className="border border-brand-taupe/20 p-6 bg-brand-black">
              <span className="font-heading font-bold text-2xl text-brand-taupe">02</span>
              <h4 className="font-heading font-semibold text-lg text-brand-offwhite mt-3">
                Site Survey &amp; Blueprint
              </h4>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                Precision azimuth solar irradiance modeling, structural roof load inspection, and single-line diagrams (SLD) specifying cable diameters and breakers.
              </p>
            </div>

            <div className="border border-brand-taupe/20 p-6 bg-brand-black">
              <span className="font-heading font-bold text-2xl text-brand-taupe">03</span>
              <h4 className="font-heading font-semibold text-lg text-brand-offwhite mt-3">
                Installation &amp; Earthing
              </h4>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                Certified technicians complete mechanical mounting, flame-retardant trunking, and Type-2 surge protection with copper earth pit testing.
              </p>
            </div>

            <div className="border border-brand-taupe/20 p-6 bg-brand-black">
              <span className="font-heading font-bold text-2xl text-brand-taupe">04</span>
              <h4 className="font-heading font-semibold text-lg text-brand-offwhite mt-3">
                Support &amp; Telemetry
              </h4>
              <p className="font-sans font-light text-xs text-brand-taupe mt-2 leading-relaxed">
                Live mobile and cloud app monitoring for battery state of charge (SoC), historical yields, and proactive remote maintenance alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (Quiet Luxury Feedback) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
            VERIFIED CLIENT REVIEWS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1">
            Tested &amp; trusted by Nigerian property owners.
          </h2>
          <p className="font-sans font-light text-sm text-brand-black/75 mt-3">
            Real reliability tested through unstable national grid conditions and surging diesel prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-brand-taupe/25 p-8 bg-brand-offwhite shadow-subtle flex flex-col justify-between">
            <p className="font-sans font-light text-sm text-brand-black/80 leading-relaxed italic">
              &ldquo;In healthcare, a 10-second generator cutover can compromise life support. Godfirst delivered true sub-second transfer for our ICU clinic in Garki. Our monthly diesel budget plummeted from ₦1.4m to under ₦250k.&rdquo;
            </p>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6">
              <p className="font-heading font-semibold text-sm text-brand-black">Dr. K. Alabi</p>
              <p className="font-sans font-light text-xs text-brand-black/60">Medical Director, Garki Clinic, Abuja</p>
            </div>
          </div>

          <div className="border border-brand-taupe/25 p-8 bg-brand-offwhite shadow-subtle flex flex-col justify-between">
            <p className="font-sans font-light text-sm text-brand-black/80 leading-relaxed italic">
              &ldquo;Our 50kVA installation at Victoria Island runs silently day and night. We have not bought diesel for our 150kVA backup genset in three weeks straight. Engineering precision at its absolute best.&rdquo;
            </p>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6">
              <p className="font-heading font-semibold text-sm text-brand-black">Engr. Femi Oladipo</p>
              <p className="font-sans font-light text-xs text-brand-black/60">Head of Facilities, Fintech Tower, Lagos</p>
            </div>
          </div>

          <div className="border border-brand-taupe/25 p-8 bg-brand-offwhite shadow-subtle flex flex-col justify-between">
            <p className="font-sans font-light text-sm text-brand-black/80 leading-relaxed italic">
              &ldquo;The Banana Island microgrid powers our inverter AC units all afternoon directly from the panels. The remote Victron dashboard allows me to track live consumption even when I am traveling abroad.&rdquo;
            </p>
            <div className="pt-6 border-t border-brand-taupe/20 mt-6">
              <p className="font-heading font-semibold text-sm text-brand-black">Barr. Anita Danjuma</p>
              <p className="font-sans font-light text-xs text-brand-black/60">Homeowner, Banana Island, Ikoyi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TRUSTED EQUIPMENT PARTNERS */}
      <section className="py-12 border-y border-brand-taupe/20 bg-brand-divine/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-sans font-light uppercase tracking-ultra text-[10px] text-brand-taupe mb-6">
            OUR HARDWARE &amp; COMPONENT SUPPLY PARTNERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-brand-black/60 font-heading font-bold text-sm tracking-wider uppercase">
            <span>VICTRON ENERGY</span>
            <span>GROWATT</span>
            <span>FELICITY SOLAR</span>
            <span>DEYE INVERTERS</span>
            <span>LONGI SOLAR</span>
            <span>JINKO SOLAR</span>
          </div>
        </div>
      </section>

      {/* 11. BLOG / INSIGHTS PREVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="blog">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-brand-taupe/20 pb-8">
          <div>
            <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-slate">
              SOLAR INSIGHTS &amp; EDUCATION
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-black tracking-tight mt-1">
              Practical guides for Nigerian property owners.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black tracking-wide border-b border-brand-slate pb-1 transition-colors"
          >
            <span>Read all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="border border-brand-taupe/30 bg-brand-offwhite p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans text-brand-slate uppercase tracking-wider font-medium">
                Load Engineering
              </span>
              <h3 className="font-heading font-bold text-lg text-brand-black mt-2">
                How to size the perfect solar system for your Nigerian home
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-3 leading-relaxed">
                Understand peak surge draw versus continuous load, and avoid paying for under-sized battery banks unable to run your AC and borehole pump.
              </p>
            </div>
            <Link
              href="/blog/how-to-size-a-solar-system"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black pt-6"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </article>

          <article className="border border-brand-taupe/30 bg-brand-offwhite p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans text-brand-slate uppercase tracking-wider font-medium">
                Battery Technology
              </span>
              <h3 className="font-heading font-bold text-lg text-brand-black mt-2">
                Lithium vs Tubular: Which battery is best for Nigeria&apos;s climate?
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-3 leading-relaxed">
                Why lithium iron phosphate (LiFePO4) outperforms old acid tubular batteries in high ambient temperatures, offering 10+ years without acid fumes.
              </p>
            </div>
            <Link
              href="/blog/lithium-vs-tubular-batteries"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black pt-6"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </article>

          <article className="border border-brand-taupe/30 bg-brand-offwhite p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans text-brand-slate uppercase tracking-wider font-medium">
                Surge Protection
              </span>
              <h3 className="font-heading font-bold text-lg text-brand-black mt-2">
                Surge Protection: Why you must safeguard expensive appliances
              </h3>
              <p className="font-sans font-light text-xs text-brand-black/70 mt-3 leading-relaxed">
                How unstable grid voltage spikes of 270V+ can destroy electronics, and how Type-2 AC/DC surge protection isolates your house safely.
              </p>
            </div>
            <Link
              href="/blog/surge-protection-for-appliances"
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-slate hover:text-brand-black pt-6"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </article>
        </div>
      </section>

      {/* 12. CTA BANNER (Foundation Black, Slate Accents, Direct WhatsApp & Phone) */}
      <section className="py-20 bg-brand-black text-brand-offwhite border-t border-brand-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-sans font-light uppercase tracking-ultra text-[10.5px] text-brand-taupe">
            SWITCH TO DEPENDABLE ENERGY
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-offwhite tracking-tight mt-2">
            Ready to switch to uninterrupted solar power today?
          </h2>
          <p className="font-sans font-light text-base text-brand-taupe max-w-2xl mx-auto mt-4 leading-relaxed">
            Speak directly with our technical team in Lagos or Abuja. We provide honest equipment sizing, transparent Bills of Quantities (BOQ), and same-day estimates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-8">
            <a
              href="https://wa.me/2348082312819?text=Hello%20Godfirst%20Solar,%20I%20am%20ready%20to%20get%20a%20solar%20quote%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-slate text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-offwhite hover:text-brand-black transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Engineer on WhatsApp</span>
            </a>

            <a
              href="tel:08082312819"
              className="inline-flex items-center gap-2 px-7 py-4 border border-brand-taupe/40 text-brand-offwhite font-heading text-xs font-medium tracking-wide hover:border-brand-offwhite transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-taupe" />
              <span>Direct Hotline: 08082312819</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
