import './index.scss'
import { block } from '@/shared/lib'

interface ButtonProps {
  value: string
  className?: string
  extraAttrs?: string
  type?: string
}

function Button({ value, className, extraAttrs, type }: ButtonProps) {
  const baseClass = 'button'

  const getClassName = block(baseClass)

  return `
    <button 
      type="${type || 'button'}" 
      class="${className || ''} ${getClassName()}" 
      ${extraAttrs || ''}
      >
      ${value}
    </button>
  `
}

export { Button }
