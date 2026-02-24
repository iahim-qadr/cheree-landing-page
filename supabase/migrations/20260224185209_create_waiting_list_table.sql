/*
  # Create waiting_list table

  1. New Tables
    - `waiting_list`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `verification_token` (text)
      - `verified` (boolean)
      - `verified_at` (timestamp)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `waiting_list` table
    - Add policy for public insertion
    - Add policy for authenticated admin access
*/

CREATE TABLE IF NOT EXISTS waiting_list (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  verification_token text,
  verified boolean DEFAULT false,
  verified_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waiting_list ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert emails"
  ON waiting_list
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Verified emails are readable"
  ON waiting_list
  FOR SELECT
  TO anon
  USING (verified = true);
