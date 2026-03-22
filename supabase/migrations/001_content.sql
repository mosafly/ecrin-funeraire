-- Content table for CMS
CREATE TABLE IF NOT EXISTS content (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  section    text NOT NULL,
  key        text NOT NULL,
  value      text NOT NULL,
  updated_at timestamptz DEFAULT now(),
  UNIQUE (section, key)
);

-- RLS
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read content"
  ON content FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated can modify content"
  ON content FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Seed data
INSERT INTO content (section, key, value) VALUES
  ('hero', 'title', 'Créer une cérémonie funéraire personnalisée en quelques minutes'),
  ('hero', 'subtitle', 'Application pour maîtres de cérémonie :
Collectez les informations des familles.
Générez vos textes, poèmes, musiques, citations, diaporamas.
Créez vos supports.'),
  ('hero', 'bandeau_1', 'Gagner du temps'),
  ('hero', 'bandeau_2', 'Structurer la cérémonie'),
  ('hero', 'bandeau_3', 'Produire les documents'),
  ('hero', 'cta', 'Participer à la création de l''application'),
  ('features', 'title', 'Fonctionnalités'),
  ('feat_1', 'title', 'Avant la cérémonie : collecter les informations'),
  ('feat_1', 'item_1', 'Vous recevez la famille pour un entretien.'),
  ('feat_1', 'item_2', 'Vous contactez la famille par téléphone.'),
  ('feat_1', 'item_3', 'Vous envoyez un formulaire à la famille.'),
  ('feat_2', 'title', 'Préparation'),
  ('feat_2', 'intro', 'L''application génère automatiquement en fonction des informations collectées :'),
  ('feat_2', 'item_1', 'Des textes de cérémonie.'),
  ('feat_2', 'item_2', 'Une trame de cérémonie.'),
  ('feat_2', 'item_3', 'Des idées de poèmes, musiques, textes, citations.'),
  ('feat_2', 'item_4', 'Des diaporamas en fonction des photos et de la musique choisie par la famille.'),
  ('feat_3', 'title', 'Supports'),
  ('feat_3', 'intro', 'Vous créez en 1 clic :'),
  ('feat_3', 'item_1', 'Des cartes famille.'),
  ('feat_3', 'item_2', 'Des cartes hommage.'),
  ('feat_3', 'item_3', 'Un livret hommage.'),
  ('feat_3', 'item_4', 'Un registre personnalisé.'),
  ('feat_3', 'item_5', 'Des cartes de remerciement.'),
  ('participer', 'title', 'Participez à la création de l''application.'),
  ('participer', 'cta', 'Participer à la création de l''application'),
  ('contact', 'email', 'jmrey@formafuneraire.fr'),
  ('footer', 'copy', '© 2024 L''Écrin Funéraire. L''élégance du dernier hommage.')
ON CONFLICT (section, key) DO NOTHING;
