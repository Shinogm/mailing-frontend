import { getFolders } from '@/utils/supabase/server'
import { AddMailIcon } from '../icons'
import Link from 'next/link'
import { v4 } from '@/utils/uuid'
import { FolderItem } from './folder-item'

export const FolderList = async () => {
  const folders = await getFolders()

  return (
    <aside
      className='border-r p-2 h-full'
    >
      <section
        className='flex justify-end w-full p-1'
      >
        <Link href='/add'>
          <div
            className='p-2 bg-blue-400/40 rounded-md cursor-pointer hover:bg-blue-400/90 transition-colors duration-200 ease-in-out'
          >
            <AddMailIcon />
          </div>
        </Link>
      </section>

      <nav
        className='overflow-y-auto h-full'
      >
        <ul>
          {folders.map((folder) => (
            <FolderItem key={v4()} folder={folder} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}
