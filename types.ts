export interface FolderWithMails {
  id: number
  created_at: string
  owner: string
  name: string
  mails: Mail[]
}

export interface Mail {
  id: number
  created_at: string
  folder: number
  email: string
  checked: boolean
}
