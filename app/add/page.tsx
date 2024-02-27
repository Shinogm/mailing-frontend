import { getFolders, addMail } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'

export default async function Add () {
  const folders = await getFolders()

  return (
    <main>
      <h1>Add</h1>
      <form action={addMail} className='flex flex-col gap-3'>
        <select name='folder' className='text-black'>
          {folders.map((folder) => (
            <option key={v4()} value={folder.id}>{folder.name}</option>
          ))}
        </select>

        <textarea name='mails' className='text-black' />
        <button type='submit' className='bg-blue-400/40 rounded-md cursor-pointer hover:bg-blue-400/90 transition-colors duration-200 ease-in-out'>
          Add
        </button>
      </form>
    </main>
  )
}
