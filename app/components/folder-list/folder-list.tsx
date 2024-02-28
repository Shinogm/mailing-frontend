import { getFolders } from '@/utils/supabase/server'
import { v4 } from '@/utils/uuid'
import { FolderItem } from './folder-item'

export const FolderList = async () => {
  const folders = await getFolders()

  return (
    <aside
      className='h-full p-2 border-r'
    >
      <nav
        className='h-full overflow-y-auto'
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
