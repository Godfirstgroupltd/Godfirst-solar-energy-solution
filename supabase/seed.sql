-- ==============================================================================
-- GODFIRST SOLAR & ENERGY LTD
-- Seed Data: Realistic Nigerian Project Data & Operational Parameters
-- (Clearly marked as placeholder seed records for development & staging)
-- ==============================================================================

-- 1. SEED LEADS
INSERT INTO public.leads (name, phone, email, location, topology, service, timeline, message, peak_demand_kw, rec_inverter_kva, rec_battery_kwh, status, notes)
VALUES
(
    'Chief Babatunde Adeleke [PLACEHOLDER SEED]',
    '08082312819',
    'babatunde.adeleke@gmail.com',
    'Banana Island, Ikoyi, Lagos',
    'Residential Flat / Duplex',
    'Home Plus (Custom 15kVA)',
    'Urgent • Within 7 Days',
    'Waterfront luxury villa looking to eradicate nocturnal generator noise and power 2 inverter ACs continuously.',
    8.50,
    15.00,
    20.40,
    'Won',
    'Deposit received. Marine-grade anodized rails ordered.'
),
(
    'Dr. Grace Nnamdi [PLACEHOLDER SEED]',
    '08082312819',
    'dr.nnamdi@lifecare.ng',
    'Garki Area 11, Abuja FCT',
    'Healthcare Hospital / Clinic',
    'Commercial / Healthcare Microgrid',
    'Standard • Within 30 Days',
    'Intensive Care Unit and neonatal incubator backup requiring zero-flicker cutover.',
    16.20,
    25.00,
    35.00,
    'Quoted',
    'BOQ delivered for 25kVA hybrid medical microgrid.'
),
(
    'Alh. Bello Danjuma [PLACEHOLDER SEED]',
    '08082312819',
    'bello.danjuma@kanograins.ng',
    'Challawa Industrial, Kano',
    'Industrial Warehouse / Plant',
    'Commercial Hub (50kVA Parallel)',
    'Urgent • Within 7 Days',
    'Grain drying blowers and automated packaging conveyors experiencing severe grid brownouts.',
    38.00,
    50.00,
    80.00,
    'Contacted',
    'Kano regional engineer dispatched for transformer harmonic inspection.'
)
ON CONFLICT DO NOTHING;

-- 2. SEED SITE SETTINGS
INSERT INTO public.site_settings (key, value)
VALUES
(
    'general',
    '{
        "companyName": "GODFIRST SOLAR & ENERGY LTD",
        "motherGroup": "GODFIRST GROUP LTD (EST. 2026)",
        "divisionTagline": "Power that lasts.",
        "motherTagline": "Foundation First.",
        "phone": "08082312819",
        "email": "godfirst.groupltd@gmail.com",
        "address": "Lekki Phase 1, Lagos & Area 11 Garki, Abuja, Nigeria",
        "statInstallations": "500+",
        "statUptime": "100%",
        "statExperience": "15+ Yrs"
    }'::jsonb
)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

