import { createAcount } from '@/utils/supabase/server'

export default async function Account () {
  return (
    <form action={createAcount}>
      <div>
        <label>
          <span> email </span>
          <input name='email' className='text-black' />
        </label>

        <label>
          <span> password </span>
          <input name='password' className='text-black' />
        </label>
        <button type='submit'>Create Mail Account</button>
      </div>
    </form>
  )
}
