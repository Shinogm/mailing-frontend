'use client'
import { createAcount, getServer } from '@/utils/supabase/server'
import { LabeledInput } from '../components/forms/label-input'
import { useEffect, useState } from 'react'
import { Tables } from '@/database.types'
import { v4 } from '@/utils/uuid'

export default function Account () {
  const [servers, setServers] = useState<Array<Tables<'mail_server'>>>([])

  const [selectedServer, setSelectedServer] = useState<Tables<'mail_server'> | null>(null)

  useEffect(() => {
    getServer()
      .then(servers => {
        setServers(servers)
        setSelectedServer(servers[0])
      })
      .catch(console.error)
  }, [])
  return (
    <form action={createAcount}>
      <div>

        <LabeledInput
          placeholder='example@example.com'
          label='email'
          type='email'
          name='email' required
        />
        <LabeledInput
          placeholder='*********'
          label='password'
          type='password'
          name='password' required
        />

        <select
          name='servers'
          className='text-black'
          onChange={(event) => {
            const selectedServerId = event.target.value
            const server = servers.find(server => server.id === Number(selectedServerId))
            setSelectedServer(server ?? null)
          }}
          value={selectedServer?.id ?? ''}
        >
          {servers.map((server) => (
            <option key={v4()} value={server.id}>{server.url}</option>
          ))}
        </select>

        <button type='submit'>Create Mail Account</button>
      </div>
    </form>
  )
}
