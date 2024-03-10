import { create } from 'zustand'
import { FolderWithMails, Mail } from '@/types'

interface MailsCheckedStore {
  mails: { [key: number]: Mail }
  addMail: (mail: Mail) => void
  removeMail: (mail: Mail) => void
  ifAllChecked: (folder: FolderWithMails) => boolean
  getMails: () => string[]
}

export const mailsCheckedStore = create<MailsCheckedStore>((set, get) => ({
  mails: {},
  addMail: (mail: Mail) => set((state) => ({ mails: { ...state.mails, [mail.id]: mail } })),
  removeMail: (mail: Mail) => set((state) => {
    const { [mail.id]: _, ...mails } = state.mails
    return { mails }
  }),
  ifAllChecked: folder => {
    const { mails } = get()

    return folder.mails.every((mail) => mails[mail.id])
  },
  getMails: () => Object.values(get().mails).map((mail) => mail.email)
}))
