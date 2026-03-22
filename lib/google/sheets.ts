import { google } from 'googleapis'

function getAuthClient() {
  const credentialsBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY!
  const credentials = JSON.parse(
    Buffer.from(credentialsBase64, 'base64').toString('utf-8')
  )
  return new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

export async function appendToWaitlistSheet(
  email: string,
  source: string,
  createdAt: string
): Promise<void> {
  const auth = getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: 'Inscrits!A:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[email, source, createdAt]],
    },
  })
}
