import { createAcount } from '@/utils/supabase/server'
import { LabeledInput } from '../components/forms/label-input'

export default async function Account () {
  return (
    <form action={createAcount}>
      <div>

        <LabeledInput
          placeholder='example@example.com'
          label='email'
          type='email'
          name='email' required
        />
        <LabeledInput
          placeholder='*********'
          label='password'
          type='password'
          name='password' required
        />

        <button type='submit'>Create Mail Account</button>
      </div>
    </form>
  )
}
