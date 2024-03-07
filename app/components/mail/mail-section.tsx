'use client'

import { Tables } from '@/database.types'
import { mailsCheckedStore } from '@/stores/mails-checked'
import { getMailAccountsWhereMailServer, getServer, sendMail } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'
import { useEffect, useState } from 'react'
import { z } from 'zod'

export default function MailSends () {
  const [servers, setServers] = useState<Array<Tables<'mail_server'>>>([])
  const [accounts, setAccounts] = useState<Array<Tables<'mail_accounts'>>>([])
  const [selectedServer, setSelectedServer] = useState<Tables<'mail_server'> | null>(null)
  const getMails = mailsCheckedStore((state) => state.getMails)

  useEffect(() => {
    getServer()
      .then(servers => {
        setServers(servers)
        setSelectedServer(servers[0])

        getMailAccountsWhereMailServer(servers[0].id)
          .then(accounts => {
            setAccounts(accounts)
          })
          .catch(console.error)
      })
      .catch(console.error)
  }, [])

  return (
    <main>
      <h1 className='text-center'>Enviar Correo</h1>
      <form
        onSubmit={
        (event) => {
          event.preventDefault()
          const mails = getMails()

          const mailConfig = {
            serverId: z.coerce.number().parse(event.currentTarget.servers.value),
            accountId: z.coerce.number().parse(event.currentTarget.account.value),
            message: z.coerce.string().parse(event.currentTarget.message.value),
            subject: z.coerce.string().parse(event.currentTarget.subject.value)
          }

          console.log(mailConfig, mails)

          sendMail(mailConfig, mails)
            .catch(console.error)
        }
      }
        className='flex flex-col gap-3'
      >
        <span>Servers</span>
        <select
          name='servers'
          className='text-black'
          onChange={(event) => {
            const selectedServerId = event.target.value
            const server = servers.find(server => server.id === Number(selectedServerId))
            setSelectedServer(server ?? null)
            getMailAccountsWhereMailServer(Number(selectedServerId))
              .then(accounts => {
                setAccounts(accounts as any)
              })
              .catch(console.error)
          }}
          value={selectedServer?.id ?? ''}
        >
          {servers.map((server) => (
            <option key={v4()} value={server.id}>{server.url}</option>
          ))}
        </select>

        account
        <select
          name='account' className='text-black'
        >
          {accounts.map((account) => (
            <option key={v4()} value={account.id}>{account.email}</option>
          ))}
        </select>
        asunto
        <input name='subject' className='text-black' />
        mensaje
        <textarea name='message' className='text-black' />
        <button type='submit' className='transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'>
          Enviar
        </button>
      </form>
    </main>
  )
}
