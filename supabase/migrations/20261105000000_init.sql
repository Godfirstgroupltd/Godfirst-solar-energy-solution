-- ==============================================================================
-- GODFIRST SOLAR & ENERGY LTD (GODFIRST GROUP LTD)
-- Database Migration: Tables, Indexes, RLS Policies, and Storage Setup
-- SINGLE ADMIN RULE: auth.jwt()->>'email' = 'godfirst.groupltd@gmail.com'
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. LEADS & QUOTES TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    location TEXT NOT NULL,
    topology TEXT DEFAULT 'Residential Flat / Duplex',
    service TEXT DEFAULT 'General Quote',
    timeline TEXT DEFAULT 'Standard • Within 30 Days',
    message TEXT,
    peak_demand_kw NUMERIC(6, 2) DEFAULT 0.00,
    rec_inverter_kva NUMERIC(6, 2) DEFAULT 0.00,
    rec_battery_kwh NUMERIC(6, 2) DEFAULT 0.00,
    inventory JSONB DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Quoted', 'Won', 'Lost')),
    notes TEXT DEFAULT '',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for leads search
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- 2. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    icon_name TEXT DEFAULT 'Grid3X3',
    description TEXT NOT NULL,
    specifications TEXT[] DEFAULT ARRAY[]::TEXT[],
    deliverables TEXT[] DEFAULT ARRAY[]::TEXT[],
    faqs JSONB DEFAULT '[]'::jsonb,
    is_published BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    tagline TEXT,
    category TEXT NOT NULL CHECK (category IN ('Residential', 'Commercial')),
    is_featured BOOLEAN DEFAULT false,
    inverter_capacity TEXT NOT NULL,
    battery_storage TEXT NOT NULL,
    solar_array TEXT NOT NULL,
    daily_harvest TEXT,
    transfer_time TEXT DEFAULT '< 4ms',
    appliances_covered TEXT[] DEFAULT ARRAY[]::TEXT[],
    technical_highlights TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    state TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Residential', 'Healthcare', 'Commercial', 'Industrial', 'Hospitality')),
    system_size TEXT NOT NULL,
    storage_bank TEXT NOT NULL,
    core_hardware TEXT NOT NULL,
    diesel_savings TEXT,
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    challenge TEXT,
    solution TEXT,
    results TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    read_time TEXT DEFAULT '5 min read',
    excerpt TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT 'Engr. Femi Alabi',
    author_role TEXT NOT NULL DEFAULT 'Lead Technical Division',
    content TEXT[] DEFAULT ARRAY[]::TEXT[],
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 6. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author TEXT NOT NULL,
    role TEXT,
    company TEXT,
    location TEXT,
    rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    quote TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 7. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Strict Single Admin Policy: Only godfirst.groupltd@gmail.com gets write access.
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Helper function: Is Authenticated Single Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (auth.jwt() ->> 'email') = 'godfirst.groupltd@gmail.com';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- --- LEADS POLICIES ---
-- Public can INSERT leads (quote requests)
CREATE POLICY "Public can submit quotes" ON public.leads
    FOR INSERT
    WITH CHECK (true);

-- Only admin can SELECT, UPDATE, DELETE leads
CREATE POLICY "Admin has full access to leads" ON public.leads
    FOR ALL
    USING (public.is_admin());

-- --- PUBLIC CONTENT POLICIES (Read-Only Public, Write-Admin) ---
-- Services
CREATE POLICY "Public can view published services" ON public.services
    FOR SELECT
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Admin can modify services" ON public.services
    FOR ALL
    USING (public.is_admin());

-- Packages
CREATE POLICY "Public can view published packages" ON public.packages
    FOR SELECT
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Admin can modify packages" ON public.packages
    FOR ALL
    USING (public.is_admin());

-- Projects
CREATE POLICY "Public can view published projects" ON public.projects
    FOR SELECT
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Admin can modify projects" ON public.projects
    FOR ALL
    USING (public.is_admin());

-- Blog Posts
CREATE POLICY "Public can view published posts" ON public.blog_posts
    FOR SELECT
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Admin can modify posts" ON public.blog_posts
    FOR ALL
    USING (public.is_admin());

-- Testimonials
CREATE POLICY "Public can view published testimonials" ON public.testimonials
    FOR SELECT
    USING (is_published = true OR public.is_admin());

CREATE POLICY "Admin can modify testimonials" ON public.testimonials
    FOR ALL
    USING (public.is_admin());

-- Site Settings
CREATE POLICY "Public can view site settings" ON public.site_settings
    FOR SELECT
    USING (true);

CREATE POLICY "Admin can update site settings" ON public.site_settings
    FOR ALL
    USING (public.is_admin());

-- ==============================================================================
-- STORAGE BUCKETS SETUP
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-media', 'site-media', true)
ON CONFLICT (id) DO NOTHING;

-- Public can read from storage
CREATE POLICY "Public media read access" ON storage.objects
    FOR SELECT
    USING (bucket_id = 'site-media');

-- Only single admin can upload/delete from storage
CREATE POLICY "Admin media write access" ON storage.objects
    FOR ALL
    USING (bucket_id = 'site-media' AND (auth.jwt() ->> 'email') = 'godfirst.groupltd@gmail.com');

