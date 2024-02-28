const api = 'http://localhost:3001/mail/send'

export default async function SendEmails (
  title: string,
  mailProperties: {
    url: string
    port: number
    email: string
    password: string
  },
  mails: string[],
  html: string
) {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('accept', 'application/json')

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      mailProperties,
      mails,
      html
    })
  }

  return await fetch(`${api}?title=${title}`, options)
}
