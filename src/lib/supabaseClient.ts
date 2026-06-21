import { createClient } from '@supabase/supabase-js'

// Use safe fallbacks so the build doesn't crash when env vars are not yet set.
// Real values must be configured in Vercel Dashboard → Project → Environment Variables.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
)

// TypeScript type for the contact_messages table
export type ContactMessage = {
  id?: number
  created_at?: string
  name: string
  email: string
  message: string
}
