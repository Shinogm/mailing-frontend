import { createFolder } from '@/utils/supabase/server'
import Lobby from '../components/init/init'

export default async function CreateUserFolder () {
  return (
    <main>
      <div>
        <Lobby />
      </div>
      <h1 className='text-center'>Crear carpeta</h1>
      <form className='flex flex-col gap-3' action={createFolder}>
        <input name='folders' className='text-black' />
        <button type='submit' className='transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'>
          Crear Carpeta
        </button>
      </form>
    </main>
  )
}
