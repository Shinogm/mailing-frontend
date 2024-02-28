import { mailServer } from '@/utils/supabase/server'

export default function server () {
  return (
    <form action={mailServer}>
      <div>
        <label>
          <span> url </span>
          <input className='text-black' name='url' />
        </label>
        <label>
          <span> port </span>
          <input className='text-black' name='port' />
        </label>
        <button type='submit'>Create Mail Server</button>
      </div>
    </form>
  )
}
