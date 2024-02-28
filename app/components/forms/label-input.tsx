'use client'

interface Props {
  label: string
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  required?: boolean
  name?: string
  capitalize?: boolean
}

const className = {
  isCapitalized: 'capitalize'
}

export const LabeledInput = ({ label, placeholder, type, required = false, name, capitalize = false }: Props) => (
  <label
    className='flex flex-col mb-4'
  >
    <span
      className='text-lg font-bold'
    >
      {label}
    </span>
    <input
      className={`outline-none border-b border-black/50 py-1 focus:border-black transition-all focus:px-1 dark:text-white/80 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-gray-500 ${capitalize ? className.isCapitalized : ''}`}
      type={type}
      placeholder={placeholder}
      required={required}
      name={name}
    />
  </label>
)
