export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  iconName: string;
  description: string;
  specifications: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export interface PackageItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "Residential" | "Commercial";
  isFeatured?: boolean;
  inverterCapacity: string;
  batteryStorage: string;
  solarArray: string;
  dailyHarvest: string;
  transferTime: string;
  appliancesCovered: string[];
  technicalHighlights: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  state: string;
  category: "Residential" | "Healthcare" | "Commercial" | "Industrial" | "Hospitality";
  systemSize: string;
  storageBank: string;
  coreHardware: string;
  dieselSavings: string;
  imageUrl: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  authorRole: string;
  content: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    slug: "solar-panel-installation",
    title: "Solar Panel Installation",
    summary: "Tier-1 monocrystalline solar PV arrays engineered for maximum irradiance harvest in tropical climates.",
    iconName: "Grid3X3",
    description:
      "Our solar panel installations utilize only factory-calibrated Tier-1 mono-PERC and TOPCon modules. Mounted using corrosion-resistant anodized aluminum rails and stainless steel marine-grade hardware, our arrays are engineered to withstand extreme rainfall, high harmattan dust loads, and salt-laden coastal atmospheres across Lagos, Port Harcourt, and northern sun corridors.",
    specifications: [
      "Tier-1 Bloomberg NEF certified monocrystalline modules (550W–700W+)",
      "22%+ Module conversion efficiency with half-cut cell technology",
      "Corrosion-resistant anodized aluminum mounting rails & stainless steel brackets",
      "Hail-resistant tempered solar glass tested to international IEC standards",
      "25-Year linear power warranty with less than 0.55% annual degradation",
    ],
    deliverables: [
      "3D Azimuth and roof irradiance shading simulation",
      "Structural roof-load calculation and wind-shear analysis",
      "Flame-retardant DC trunking and double-insulated solar cables",
      "NEMSA-compliant earthing and Type-2 surge protection installation",
    ],
    faqs: [
      {
        question: "Do solar panels generate power during rainy seasons or cloudy days?",
        answer:
          "Yes. Monocrystalline panels harvest both direct sunlight and diffuse irradiance. While peak output drops slightly on deeply overcast days, systems are calibrated with battery reserves to guarantee zero interruption.",
      },
      {
        question: "How are solar panels secured against strong wind gusts?",
        answer:
          "We use non-penetrative clamps for standing seam roofs and heavy-duty structural anchors tested for wind gusts up to 130 km/h, ensuring roof integrity.",
      },
    ],
  },
  {
    id: "serv-2",
    slug: "inverter-battery-systems",
    title: "Inverter & Battery Systems",
    summary: "Hybrid pure sine wave inverters with smart LiFePO4 battery storage for zero-downtime cutover.",
    iconName: "BatteryCharging",
    description:
      "Eliminate noisy generator blackouts and power dips. We configure industrial-grade hybrid inverters with prismatic Lithium Iron Phosphate (LiFePO4) storage banks. With sub-4ms automatic transfer switching, your medical equipment, sensitive home automation, and computer servers continue running without a flicker when the national grid drops.",
    specifications: [
      "Pure Sine Wave output with Total Harmonic Distortion (THD) < 2%",
      "Automotive-grade Grade-A prismatic LiFePO4 lithium cells",
      "6,000+ Deep discharge cycles at 80% Depth of Discharge (DoD)",
      "Sub-4 millisecond Automatic Transfer Switch (ATS) seamless cutover",
      "Integrated Smart Battery Management System (BMS) with cell balancing",
      "10-Year operational life design with zero acid fume emissions",
    ],
    deliverables: [
      "Wall-mount or 19-inch server-rack modular battery configuration",
      "Smart breaker enclosure with dual AC & DC circuit isolation",
      "WiFi / 4G cloud gateway for remote telemetry and monitoring",
      "Single-line diagram (SLD) and electrical safety sign-off",
    ],
    faqs: [
      {
        question: "Why does Godfirst use LiFePO4 instead of traditional lead-acid or gel batteries?",
        answer:
          "LiFePO4 batteries offer 5x the lifespan of lead-acid, 95% usable capacity compared to 50% for lead-acid, zero toxic fumes, and maintain performance in ambient Nigerian temperatures without thermal runaway.",
      },
      {
        question: "Can an inverter battery system power my air conditioner and deep freezer?",
        answer:
          "Yes. Our systems are engineered to handle the inductive surge current of inverter and rotary compressors effortlessly.",
      },
    ],
  },
  {
    id: "serv-3",
    slug: "solar-street-lights",
    title: "Solar Street Lighting & Perimeter",
    summary: "Autonomous commercial municipal, highway, and estate security illumination with intelligent dimming.",
    iconName: "Zap",
    description:
      "Designed for luxury residential estates, industrial logistics parks, and municipal highways. Our solar street lights integrate high-lumen Philips Lumileds LED engines, high-capacity LiFePO4 cells, and intelligent MPPT controllers that adjust lighting brightness from dusk to dawn, providing reliable 3–5 rainy days of continuous autonomous operation.",
    specifications: [
      "High-lumen output up to 180 lumens per Watt",
      "IP67 Weatherproof die-cast aluminum housing with heat dissipation fins",
      "Intelligent dusk-to-dawn radar motion sensors with programmable dimming profiles",
      "Hot-dip galvanized anti-corrosion poles engineered for wind resistance",
      "50,000+ Hour LED operational lifespan",
    ],
    deliverables: [
      "Photometric illumination mapping for uniform road foot-candles",
      "Foundation civil footing and anchor bolt installation",
      "Turnkey pole erection, luminaire mounting, and commissioning",
      "Scheduled maintenance and lens cleaning protocols",
    ],
    faqs: [
      {
        question: "How many days will the streetlights remain on if there is no sun?",
        answer:
          "Our fixtures are calibrated with 3 to 5 nights of autonomy, ensuring bright perimeter illumination even during prolonged monsoon rains.",
      },
    ],
  },
  {
    id: "serv-4",
    slug: "maintenance-repairs",
    title: "Maintenance & Repairs",
    summary: "Comprehensive infrared thermal audits, inverter troubleshooting, and battery rejuvenation SLAs.",
    iconName: "Wrench",
    description:
      "Protect your solar investment from thermal degradation, loose terminations, and cell imbalances. Our COREN-registered field engineers use calibrated FLIR thermal imaging cameras, battery impedance analyzers, and oscilloscope harmonic analyzers to diagnose and maintain solar installations across all 36 Nigerian states.",
    specifications: [
      "FLIR infrared thermographic scanning for junction box and diode hotspots",
      "Battery internal resistance and individual cell voltage balancing",
      "Torque auditing of all high-current DC and AC busbar terminations",
      "Inverter firmware updates and MPPT tracking efficiency validation",
      "Earth pit resistance testing ensuring < 5 Ohms grounding integrity",
    ],
    deliverables: [
      "Comprehensive NEMSA-compliant electrical diagnostic report",
      "Remediation and replacement of degraded cabling or protection breakers",
      "24/7 Priority rapid-response emergency breakdown dispatch",
    ],
    faqs: [
      {
        question: "Can Godfirst service an existing solar system installed by another company?",
        answer:
          "Yes. We conduct a complete engineering load and safety audit to identify faulty wiring, undersized batteries, or improper earthing, and restore your system to optimal performance.",
      },
    ],
  },
  {
    id: "serv-5",
    slug: "solar-consultation",
    title: "Solar Consultation & Load Audits",
    summary: "Precise energy load profiling, harmonic analysis, and institutional architectural blueprints.",
    iconName: "FileCheck",
    description:
      "Before spending capital on solar hardware, accurate engineering measurements are vital. We deploy data loggers to capture your true daily electrical consumption curve, peak inductive surges, and transformer phase balancing, delivering a transparent Bill of Quantities (BOQ) with guaranteed zero phantom capacity.",
    specifications: [
      "72-Hour continuous data logging of electrical demand curves",
      "Inductive motor starting surge analysis (compressors, pumps, lifts)",
      "Financial ROI, diesel offset amortization, and payback modeling",
      "Institutional Single-Line Diagrams (SLD) ready for regulatory approval",
    ],
    deliverables: [
      "Itemized technical Bill of Quantities (BOQ) with component datasheets",
      "Roof layout CAD drawings with optimal stringing schematics",
      "Generator hybrid synchronisation engineering blueprint",
    ],
    faqs: [
      {
        question: "Why is a load audit necessary before buying solar equipment?",
        answer:
          "A load audit ensures you don't overspend on excess panels or under-size your battery bank. It provides exact kilowatt-hour data so your system is engineered with 100% precision.",
      },
    ],
  },
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "pkg-home-basic",
    slug: "home-basic",
    name: "Home Basic",
    tagline: "Essential 24/7 quiet power for apartments, flats, and smaller residences.",
    category: "Residential",
    inverterCapacity: "3.5kVA – 5kVA Pure Sine Wave",
    batteryStorage: "5.12 kWh Grade-A LiFePO4 Lithium",
    solarArray: "4–6x 550W Tier-1 Monocrystalline Panels (2.2kWp – 3.3kWp)",
    dailyHarvest: "12 – 18 kWh / Day",
    transferTime: "< 6ms (Zero appliance reboot)",
    appliancesCovered: [
      "Full interior and exterior LED lighting points",
      "All standing and ceiling fans throughout bedrooms and living room",
      "One energy-efficient inverter double-door refrigerator",
      "Smart TVs, decoders, soundbars, and home internet routers",
      "Laptop chargers, smartphones, and low-power entertainment devices",
    ],
    technicalHighlights: [
      "Wall-mount space-saving LiFePO4 enclosure",
      "Automatic changeover switch with zero manual intervention",
      "Dual AC & DC circuit breaker box with Type-2 surge protection",
      "Pure copper DC cabling with flame-retardant conduits",
    ],
  },
  {
    id: "pkg-home-plus",
    slug: "home-plus",
    name: "Home Plus",
    tagline: "Our most requested solution for 4–5 bedroom duplexes and executive residences.",
    category: "Residential",
    isFeatured: true,
    inverterCapacity: "7.5kVA – 10kVA Pure Sine Wave Hybrid",
    batteryStorage: "10.24 kWh – 15 kWh Grade-A LiFePO4 Server-Rack Storage",
    solarArray: "10–14x 550W Tier-1 Monocrystalline Panels (5.5kWp – 7.7kWp)",
    dailyHarvest: "28 – 40 kWh / Day",
    transferTime: "< 4ms (Sub-second uninterruptible cutover)",
    appliancesCovered: [
      "1 to 2 Inverter air conditioners running day and night",
      "Double-door refrigerator plus separate chest deep freezer",
      "0.75HP to 1.0HP domestic borehole water pumping machine",
      "All LED lighting, ceiling fans, and smart home automation",
      "CCTV security camera system, electric perimeter fence, and gate motor",
      "Complete home office: multi-screen setups, laptops, and networking",
    ],
    technicalHighlights: [
      "Heavy-duty LiFePO4 server-rack battery system with active balancing",
      "Smart generator auto-start relay integration (optional genset backup)",
      "High-voltage MPPT stringing for optimal cloudy-day generation",
      "WiFi & mobile cloud app monitoring of live generation and battery health",
    ],
  },
  {
    id: "pkg-commercial-hub",
    slug: "commercial-hub",
    name: "Commercial Hub",
    tagline: "Heavy-duty 3-phase hybrid microgrid for corporate offices, clinics, and hospitality.",
    category: "Commercial",
    inverterCapacity: "15kVA – 50kVA+ 3-Phase Industrial Synchronized Inverters",
    batteryStorage: "20.4 kWh – 60+ kWh High-Voltage LiFePO4 Battery Banks",
    solarArray: "16–48x 550W–700W High-Efficiency Monocrystalline Panels (8.8kWp – 30kWp+)",
    dailyHarvest: "60 – 160+ kWh / Day",
    transferTime: "< 4ms (Utility-grade zero flicker)",
    appliancesCovered: [
      "Central air conditioning and multi-zone VRF climate systems",
      "Commercial walk-in cold rooms, deep freezers, and hospitality kitchens",
      "Medical laboratory equipment, neonatal incubators, and surgical lighting",
      "Passenger elevators, 3-phase water booster pumps, and industrial compressors",
      "Data server rooms, uninterrupted cloud workstations, and PBX telephony",
    ],
    technicalHighlights: [
      "3-Phase active load vectoring preventing phase-unbalance trips",
      "Automated generator peak-load shaving reducing diesel consumption by 85–95%",
      "SCADA and Modbus industrial telemetry monitoring with automated alarms",
      "Dedicated deep copper earth pit achieving grounding resistance < 2 Ohms",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "banana-island-villa",
    title: "Banana Island Luxury Waterfront Villa",
    location: "Banana Island, Ikoyi",
    state: "Lagos State",
    category: "Residential",
    systemSize: "15kVA 3-Phase Hybrid System",
    storageBank: "20.4 kWh LiFePO4 Server-Rack",
    coreHardware: "Victron Quattro + Deye Dual MPPT",
    dieselSavings: "100% Daytime Diesel Offset",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE3r-KkMOZWvJVfOMh0NpqwM_GRFcsSQ-NQ28mxKwVi4FCaI5ID1SXk5FOVoa8TUqHLiTQF3oLa5vmQ8hmaxj2yBNceJ5zXbAUpcVT1YY9vcojTNjBrlMZ289y3Wr8Bxgq-fBZT3nVwUVq6np3odzE45tQCxlzm8fzvKNs-V_-f3NQ6hFpSc7ViUBi7XZeux4uPLcdBfNFrfKPuqbHvikX3PQMgbqGTk6ArsjK0g",
    description:
      "A flagship luxury waterfront residence in Banana Island requiring complete elimination of generator noise and exhaust fumes. The client sought a seamless solar microgrid capable of powering inverter air conditioners, wine chillers, a swimming pool filtration pump, and intelligent smart home lighting.",
    challenge:
      "Coastal salt spray along Lagos lagoon accelerates metal corrosion, while complex multi-pitch roof geometry posed shading challenges across different hours of the day.",
    solution:
      "We engineered marine-grade 316 stainless steel mounting hardware and split the solar array into two independent MPPT strings to optimize morning and afternoon solar harvest. An industrial-grade 20.4 kWh LiFePO4 battery bank was installed in a climate-controlled technical bay.",
    results: [
      "Zero generator runtime from 8:00 AM to 6:00 PM every single day",
      "Sub-4ms seamless changeover protecting smart home automation from resets",
      "Over ₦850,000 saved monthly in diesel fuel and generator maintenance costs",
      "Full cloud telemetry enabled on the homeowner's smartphone worldwide",
    ],
  },
  {
    id: "proj-2",
    slug: "garki-clinic-microgrid",
    title: "Garki Specialist Medical Clinic & ICU",
    location: "Garki Area 11",
    state: "Abuja FCT",
    category: "Healthcare",
    systemSize: "25kVA Medical Grade Hybrid Microgrid",
    storageBank: "35 kWh High-Capacity LiFePO4",
    coreHardware: "Deye Dual 25kW Synchronized Array",
    dieselSavings: "₦850,000 Saved / Month",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZmcUTvLIYpaZjoblxrZsWec1y4ZZsdQ-kdSGIC5kXkCB2gdpZSWex99CKdi7MvqGca7E2T2kcjJmRe00wYOHyIpBRtGGENOka-4JrPzn10d6Jk4nrsLJDbT3POuC76zRdb2cqBNdOQLyk4VMOCA1NLQ_bHjmdYNMk4qdHD0Bz2X8q9hNvCRg0zY902kO6y-jWfVHi1jsfZV4YLHln9QZmS_9AzJCMVLXxAxlEQ",
    description:
      "A premier Abuja medical clinic with intensive care facilities and cold-chain vaccine storage. Unpredictable Abuja grid outages and slow generator startup caused frequent voltage drops, risking sensitive surgical and diagnostic apparatus.",
    challenge:
      "Medical life-support equipment cannot tolerate even a half-second power break, and inductive laboratory autoclaves demand high momentary surge current.",
    solution:
      "Deployed a medical-grade 25kVA hybrid microgrid with dedicated isolated neutral earthing and dual redundant inverters. Backed by 35 kWh of high-current discharge LiFePO4 cells.",
    results: [
      "100% Uptime record across ICU ventilators and operating theatre lighting",
      "Generator cutover delay reduced to zero milliseconds",
      "Saved over 1,800 liters of diesel per month",
      "Complies fully with COREN and NEMSA hospital electrical safety standards",
    ],
  },
  {
    id: "proj-3",
    slug: "kano-grain-storage",
    title: "Challawa Grain Processing & Agro Storage",
    location: "Challawa Industrial Estate",
    state: "Kano State",
    category: "Industrial",
    systemSize: "50kVA Parallel Inverter Array",
    storageBank: "80 kWh Heavy-Cycle LiFePO4",
    coreHardware: "Felicity & Deye Hybrid Industrial Sync",
    dieselSavings: "₦1,400,000 Saved / Month",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLN4DWW_eHFKzYKRM4bbPbmFer2VvDVpmGPISkZs5wCEoZAzLOd0v8GXY9DRdaEJgHnWmCPsGd9Iik_FhzktfA5ZbZQ3XHBq9PXmC7o83xvErtdLPWe8QxdlwFPhzpzwgYWvxaiCTs11BaB3yqERnbzgMBxqjhF_p4AoNedrNjOu1ljAIugXbzW_pS33mCbw3Hech5WUGWA1f1McumAvUNT3W-Iwy6czdst5G4oQ",
    description:
      "A large-scale northern agro-processing plant operating automated grain drying blowers and packaging lines. Severe grid voltage sags (dropping to 160V) regularly shut down motors and disrupted processing shifts.",
    challenge:
      "High harmattan ambient dust levels and extreme temperatures reaching 42°C in northern Nigeria can degrade battery cells and trigger inverter thermal shutdowns.",
    solution:
      "Designed a 60kWp ground-mount array with high-tilt self-cleaning angles, heavy-duty industrial dust filtering for inverter bays, and an 80 kWh thermal-regulated LiFePO4 battery bank.",
    results: [
      "Continuous 24/7 industrial production with clean 400V 3-phase power",
      "Eliminated 2,450 liters of diesel per week from continuous generator running",
      "Payback amortization period calculated at under 18 months",
      "Zero motor burnouts from low-voltage grid fluctuations",
    ],
  },
  {
    id: "proj-4",
    slug: "magodo-smart-duplex",
    title: "Magodo Phase 2 Luxury Smart Duplex",
    location: "Magodo Phase 2, Shangisha",
    state: "Lagos Mainland",
    category: "Residential",
    systemSize: "7.5kVA Home Plus Smart System",
    storageBank: "10 kWh Wall-Mount LiFePO4",
    coreHardware: "Felicity Solar Hybrid 48V IVEM7548",
    dieselSavings: "₦320,000 Saved / Month",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqlV67BRufSI30EfQ47E2ljUmgvRP0cqETdU80kvxGKRV-wHSzf60bIW-WtBzmlmcTi3zNYGzaQ22FyFbVDeoTy28a8ZUvzrM7lmrcP59AF_Q7dk6z-D5rWivDflRgnHqXvVS6u38GdeYZWM7kNDeI0rjnLjJtyq51Jyyg4PQPWFxGM-R2j3PQ5tsLyyPbz6aVBD7aDA3c3hhGCauvfah1_FnItH6rQZ213jFeCA",
    description:
      "A contemporary 5-bedroom duplex where the homeowner required reliable solar to power home office computers, living room air conditioning, deep freezers, and automatic domestic water pumping.",
    challenge:
      "Limited roof space on modern flat-deck concrete architecture requiring maximum power density per square meter.",
    solution:
      "Installed high-efficiency 585W TOPCon solar panels on elevated ballasted mounting frames, paired with an ultra-compact 10 kWh wall-mount lithium battery.",
    results: [
      "100% Home electrical autonomy with zero daily generator noise",
      "Seamless water pump operation via dedicated surge-rated contactor",
      "Reduced monthly electricity and fuel expense by over 80%",
    ],
  },
  {
    id: "proj-5",
    slug: "old-gra-hotel-port-harcourt",
    title: "Old GRA 42-Room Boutique Hospitality Hotel",
    location: "Old GRA",
    state: "Rivers State (Port Harcourt)",
    category: "Hospitality",
    systemSize: "30kVA Hybrid Dual Parallel System",
    storageBank: "45 kWh LiFePO4 Rack",
    coreHardware: "Victron Energy Quattro Parallel System",
    dieselSavings: "₦980,000 Saved / Month",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkevuo0xoGC1LvnZC8vpdZcTfx0F7CQt9nsiOT_nj9HU2DH8BJlpdYxXZZSXDOtVbiTkCfPcMndsgsUrQTisDfznPu8miVr7e8PQvnNzHO6gwQQ88nCbYfd0QlatalrH-0ZnjHMssY2iN8_pWFrgV7qZmOJKVvRvmfDzD3m6CjaJOkLTNnKwtMuEmo8OkvIQukFM4FnryN2EOFWX2g98GFrJYnoduJBiuKp7cDTg",
    description:
      "A luxury boutique hotel in Port Harcourt catering to multinational energy executives. Guest satisfaction was heavily impacted by sudden room blackouts and the constant rumble of a 100kVA diesel generator.",
    challenge:
      "Constant air conditioning loads and high-demand commercial kitchen refrigeration required dynamic load vectoring and continuous power quality.",
    solution:
      "Installed a dual-parallel 30kVA Victron Quattro configuration with 45 kWh of lithium storage and automatic generator synchronization for heavy laundry cycles.",
    results: [
      "Zero nocturnal generator noise, raising guest review scores to 4.9/5",
      "Over ₦980,000 monthly reduction in diesel fuel expenses",
      "Seamless guest AC and entertainment power during municipal grid outages",
    ],
  },
];

export const BLOG_DATA: BlogPostItem[] = [
  {
    id: "post-1",
    slug: "how-to-size-a-solar-system",
    title: "How to size the perfect solar system for your Nigerian home",
    category: "Load Engineering",
    readTime: "6 min read",
    date: "November 2026",
    excerpt:
      "Understand the vital difference between running wattage and inductive surge draw, and avoid common pitfalls when selecting inverters and battery banks for your Nigerian residence.",
    author: "Engr. Femi Alabi",
    authorRole: "Lead Technical Division, Godfirst Solar",
    content: [
      "Many Nigerian homeowners make the expensive mistake of buying a solar system based solely on total nameplate appliance wattage without accounting for inductive motor starting surges. When an air conditioner compressor, deep freezer, or borehole water pumping machine turns on, it draws between 2.5x to 5x its running power for the first few fractions of a second.",
      "If your inverter does not possess the momentary surge capacity to absorb this spike, the internal protection will trip, resetting your electronics, shutting down your home office, and causing premature wear on the inverter transistors.",
      "To size your solar system accurately, start with an appliance inventory separating continuous loads (lighting, LED TVs, laptops) from inductive surge loads (compressors and pumps). Sizing the battery bank requires calculating the kilowatt-hours (kWh) consumed between 6:00 PM and 8:00 AM. For example, running two 1.5HP inverter ACs and a refrigerator overnight requires at least 10 kWh to 15 kWh of usable lithium storage to avoid dropping below safe depth of discharge thresholds.",
      "At GODFIRST SOLAR & ENERGY LTD, our registered engineers audit your actual load with power analyzers before finalizing equipment recommendations. This guarantees your system runs smoothly without trips or undersized compromises.",
    ],
  },
  {
    id: "post-2",
    slug: "lithium-vs-tubular-batteries",
    title: "Lithium vs Tubular: Which battery is best for Nigeria's climate?",
    category: "Battery Technology",
    readTime: "5 min read",
    date: "October 2026",
    excerpt:
      "Why modern Lithium Iron Phosphate (LiFePO4) chemistry has completely superseded traditional lead-acid tubular batteries in Nigerian tropical temperatures.",
    author: "Engr. Amina Bello",
    authorRole: "Senior Energy Storage Specialist",
    content: [
      "For years, Nigerian solar setups relied heavily on lead-acid tubular or gel batteries. However, anyone who has used tubular batteries in Lagos, Abuja, or Kano knows their severe weaknesses: toxic acid fumes, mandatory electrolyte top-ups, massive physical weight, and rapid degradation after just 18 to 24 months in hot ambient climates.",
      "Lithium Iron Phosphate (LiFePO4) technology represents a generational breakthrough. Operating safely at temperatures up to 55°C without thermal runaway, LiFePO4 cells deliver over 6,000 deep discharge cycles at 80% Depth of Discharge (DoD). This equates to 10 to 15 years of daily cycling compared to barely 2 years for tubular batteries.",
      "Furthermore, lithium batteries offer 95%+ round-trip efficiency and charge twice as fast as lead-acid. When daytime sunshine is intermittent during rainy months, a lithium battery absorbs available solar power rapidly, ensuring your storage is replenished before sunset.",
      "While the upfront price of lithium is higher, its true cost per lifecycle kilowatt-hour is less than half that of tubular batteries, making it the only bankable choice for discerning property owners.",
    ],
  },
  {
    id: "post-3",
    slug: "surge-protection-for-appliances",
    title: "Surge Protection: Why you must safeguard expensive appliances",
    category: "Surge Protection",
    readTime: "5 min read",
    date: "September 2026",
    excerpt:
      "Unstable grid voltages reaching 280V+ and equatorial lightning strikes can destroy solar inverters and home electronics. Here is how institutional grounding and Type-2 SPDs isolate your premises.",
    author: "Engr. Chinedu Eze",
    authorRole: "High-Voltage Protection Lead",
    content: [
      "Power grids across Nigeria suffer from severe harmonic distortion, sudden transformer phase unbalances, and high-voltage surges that frequently spike past 280V AC when supply is restored. Without proper protection, these spikes blast through consumer distribution boards, destroying motherboard circuits in expensive inverter air conditioners, OLED televisions, and refrigerator control cards.",
      "Equally dangerous are high-altitude lightning strikes on rooftop solar panel frames during rainy season storms. An improper installation acts as a lightning rod, channeling thousands of volts directly into your inverter and house wiring.",
      "To prevent catastrophic equipment loss, a professional solar installation requires three coordinated safety layers: Type-2 DC Surge Protective Devices (SPDs) installed on the solar string input, Type-2 AC SPDs on the grid and inverter output lines, and a dedicated copper earth pit achieving an electrical grounding resistance below 5 Ohms.",
      "Every Godfirst Solar installation is certified with NEMSA and COREN standard grounding and SPD containment, ensuring your home and expensive appliances remain completely isolated from exterior electrical disturbances.",
    ],
  },
];
