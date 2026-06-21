-- =============================================
-- Simon Tibrum Portfolio - Supabase SQL Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id          BIGSERIAL PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT NOT NULL
);

-- Enable Row Level Security (RLS) on the table
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public) to INSERT a new message (so the contact form works)
CREATE POLICY "Allow public inserts" ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (e.g., you as admin) can SELECT/READ messages
CREATE POLICY "Allow authenticated reads" ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);
