import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Metadata } from 'next'
import AuthButton from '@/components/AuthButton'
import { createClient } from '@/utils/supabase/server'

const defaultUrl = process.env.VERCEL_URL != null
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Mailing Service',
  description: 'Envia '
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <html lang='en' className={GeistSans.className}>
      <body className='bg-background text-foreground'>
        <div className='min-h-screen flex flex-col items-center'>
          <div className='flex-1 w-full flex flex-col gap-20 items-center'>
            <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
              <div className='w-full max-w-4xl flex justify-end items-center p-3 text-sm'>
                {isSupabaseConnected && <AuthButton />}
              </div>
            </nav>

            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
