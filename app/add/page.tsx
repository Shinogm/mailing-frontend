import { createClient, getFolders } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function Add () {
  const folders = await getFolders()

  const addMail = async (data: FormData) => {
    'use server'

    const mailsArray = (data.get('mails')?.toString() ?? '').split(',')
    console.log(mailsArray)
    const folderId = data.get('folder') as string

    const supabase = createClient()

    const mailsMap = mailsArray.map((email) => ({
      email,
      folder: parseInt(folderId)
    }))

    await supabase.from('mails_saved').insert(mailsMap)

    revalidatePath('/')
    redirect('/')
  }

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
