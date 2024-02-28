'use client'
import { FolderWithMails } from '@/types'
import { v4 } from '@/utils/uuid'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mailsCheckedStore } from '@/stores/mails-checked'
import { getFolders } from '@/utils/supabase/server'

export const FolderItem = ({ folder }: {
  folder: FolderWithMails
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const mails = mailsCheckedStore((state) => state.mails)
  const addMail = mailsCheckedStore((state) => state.addMail)
  const removeMail = mailsCheckedStore((state) => state.removeMail)

  const ifAllChecked = folder.mails.every((mail) => mails[mail.id])

  return (
    <li className='min-w-96'>
      <div className='flex justify-between'>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className=''
        >
          <span>{folder.name}</span>
        </button>
        <input
          type='checkbox'
          checked={ifAllChecked}
          onChange={(e) => {
            if (e.target.checked) {
              folder.mails.forEach(addMail)
            } else {
              folder.mails.forEach(removeMail)
            }
          }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul>
              {(folder.mails ?? []).map((mail) => (
                <li key={v4()} className='flex justify-between'>
                  <span>{mail.email}</span>
                  <input
                    type='checkbox' checked={Boolean(mails[mail.id])}
                    onChange={(e) => {
                      if (e.target.checked) {
                        addMail(mail)
                      } else {
                        removeMail(mail)
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
