export interface ContentRow {
  id: string
  section: string
  key: string
  value: string
  updated_at: string
}

export interface WaitlistRow {
  id: string
  email: string
  source: string
  sheets_synced: boolean
  created_at: string
}

export type ContentMap = Record<string, Record<string, string>>
