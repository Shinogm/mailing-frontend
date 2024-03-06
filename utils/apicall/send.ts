const api = 'http://192.168.1.20:3001/mail/send'

export default async function SendEmails (
  title: string,
  mailProperties: {
    url: string
    port: string
    email: string
    password: string
  },
  mails: string[],
  html: string
) {
  const headers = new Headers()
  headers.append('accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      mail_properties: mailProperties,
      mails,
      html
    })
  }

  return await fetch(`${api}?title=${title}`, options)
}
