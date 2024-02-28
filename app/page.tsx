import IconsSection from './components/icon-section/Icons-section'
import { FolderList } from './components/folder-list/folder-list'
import { MailSender } from './components/mail-sender'
import MailSends from './components/mail/mail-section'

export default async function Index () {
  return (
    <main
      className='flex border rounded-md h-[30rem]'
    >
      <IconsSection />
      <FolderList />
      <MailSends />
      <MailSender />
    </main>
  )
}
