-- Script SQL para criar a tabela waiting_list com verificação de email

CREATE TABLE IF NOT EXISTS waiting_list (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  verification_token VARCHAR(8) NOT NULL,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  verified_at TIMESTAMP
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_waiting_list_email ON waiting_list(email);
CREATE INDEX IF NOT EXISTS idx_waiting_list_token ON waiting_list(verification_token);
CREATE INDEX IF NOT EXISTS idx_waiting_list_verified ON waiting_list(verified);

-- Enable RLS (Row Level Security)
ALTER TABLE waiting_list ENABLE ROW LEVEL SECURITY;

-- Policy para permitir inserts públicos (signup)
CREATE POLICY "Allow public inserts" ON waiting_list
  FOR INSERT
  WITH CHECK (true);

-- Policy para permitir reads apenas de registos verificados
CREATE POLICY "Allow reading verified emails" ON waiting_list
  FOR SELECT
  USING (verified = true);

-- Policy para permitir updates por token
CREATE POLICY "Allow updates by token" ON waiting_list
  FOR UPDATE
  USING (true)
  WITH CHECK (true);
