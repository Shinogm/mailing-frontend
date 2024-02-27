import { create } from 'zustand'
import { Mail } from '@/types'

interface MailsCheckedStore {
  mails: { [key: number]: Mail }
  addMail: (mail: Mail) => void
  removeMail: (mail: Mail) => void
}

export const mailsCheckedStore = create<MailsCheckedStore>((set) => ({
  mails: {},
  addMail: (mail: Mail) => set((state) => ({ mails: { ...state.mails, [mail.id]: mail } })),
  removeMail: (mail: Mail) => set((state) => {
    const { [mail.id]: _, ...mails } = state.mails
    return { mails }
  })
}))
