-- Waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email         text NOT NULL UNIQUE,
  source        text DEFAULT 'landing',
  sheets_synced boolean DEFAULT false,
  created_at    timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert to waitlist"
  ON waitlist FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated can read waitlist"
  ON waitlist FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated can update waitlist"
  ON waitlist FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
