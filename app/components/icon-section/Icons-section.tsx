import Link from 'next/link'
import FolderIcon from '../folder-create/icon'
import { AddMailIcon } from '../icons'
import MailIcon from '../mail-account/icon'
import MailServerIcon from '../mail-server/icon'
import MailSend from '../mail/icon'

export default async function IconsSection () {
  return (
    <aside
      className='h-full p-2 border-r'
    >
      <section
        className='flex justify-end w-full p-1'
      >
        <Link href='/folders'>
          <div
            className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
          >
            <FolderIcon />
          </div>
        </Link>
      </section>
      <div>
        <section
          className='flex justify-end w-full p-1'
        >
          <Link href='/add'>
            <div
              className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
            >
              <AddMailIcon />

            </div>
          </Link>
        </section>
      </div>
      <div>
        <section
          className='flex justify-end w-full p-1'
        >
          <Link href='/mail-account'>
            <div
              className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
            >
              <MailIcon />

            </div>
          </Link>
        </section>
      </div>
      <div>
        <section
          className='flex justify-end w-full p-1'
        >
          <Link href='/mail-server'>
            <div
              className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
            >
              <MailServerIcon />

            </div>
          </Link>
        </section>
        <section
          className='flex justify-end w-full p-1'
        >
          <Link href='/send'>
            <div
              className='p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer bg-blue-400/40 hover:bg-blue-400/90'
            >
              <MailSend />

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
