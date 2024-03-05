'use client'

import { Database } from '@/database.types'
import { getMailAccountsWhereMailServer, getServer } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'
import { useEffect, useState } from 'react'

export default function MailSends () {
  const [servers, setServers] = useState<Array<Database['public']['Tables']['mail_server']['Row']>>([])
  const [accounts, setAccounts] = useState<Array<Database['public']['Tables']['mail_accounts']['Row']>>([])
  const [selectedServer, setSelectedServer] = useState<Database['public']['Tables']['mail_server']['Row'] | null>(null)
  const [selectedAccount, setSelectedAccount] = useState<Database['public']['Tables']['mail_accounts']['Row'] | null>(null)

  console.log(selectedServer, selectedAccount)

  useEffect(() => {
    getServer()
      .then(servers => {
        setServers(servers)
        setSelectedServer(servers[0])

        getMailAccountsWhereMailServer(servers[0].id)
          .then(accounts => {
            setAccounts(accounts)
            setSelectedAccount(accounts[0])
          })
          .catch(console.error)
      })
      .catch(console.error)
  }, [])

  return (
    <main>
      <h1 className='text-center'>Enviar Correo</h1>
      <form className='flex flex-col gap-3'>
        <span>Servers</span>
        <select
            name='servers'
            className='text-black'
            onChange={(event) => {
              const selectedServerId = event.target.value;
              const server = servers.find(server => server.id === Number(selectedServerId));
              setSelectedServer(server || null);
              getMailAccountsWhereMailServer(Number(selectedServerId))
                .then(accounts => {
                  setAccounts(accounts)
                  setSelectedAccount(accounts[0])
                })
                .catch(console.error)
            }}
>
  {servers.map((server) => (
    <option key={server.id} value={server.id}>{server.url}</option>
  ))}
</select>

        account
        <select name='account' className='text-black'>
          {accounts.map((account) => (
            <option key={v4()} value={account.mail_server}>{account.email}</option>
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
