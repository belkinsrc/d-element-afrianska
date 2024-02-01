import './index.scss'
import { block } from '@/shared/lib'

interface ButtonProps {
  value: string
  className?: string
}

function Button({ value, className }: ButtonProps) {
  const baseClass = 'button'

  const getClassName = block(baseClass)

  return `
    <button class="${className || ''} ${getClassName()}">${value}</button>
  `
}

export { Button }
