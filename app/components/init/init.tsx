import Link from 'next/link'
import LobbyIcon from './icon'

export default function Lobby () {
  return (
    <aside
      className='h-full p-2 border-r'
    >
      <div>
        <section
          className='flex justify-end w-full p-1'
        >
          <Link href='/'>
            <div
              className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
            >
              <LobbyIcon />

            </div>
          </Link>
        </section>
      </div>
      <nav
        className='h-full overflow-y-auto'
      />
    </aside>
  )
}
