import { getFolders, addMail } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'
import Lobby from '../components/init/init'

export default async function Add () {
  const folders = await getFolders()

  return (
    <main>
      <div>
        <Lobby />
      </div>
      <h1 className='text-center'>Añadir Contacto</h1>
      <form action={addMail} className='flex flex-col gap-3'>
        <select name='folder' className='text-black'>
          {folders.map((folder) => (
            <option key={v4()} value={folder.id}>{folder.name}</option>
          ))}
        </select>

        <textarea name='mails' className='text-black' />
        <button type='submit' className='transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'>
          Add
        </button>
      </form>
    </main>
  )
}
