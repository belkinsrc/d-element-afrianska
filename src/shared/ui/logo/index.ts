import logo from '/icons/logo.svg'
import { block } from '@/shared/lib'

function Logo() {

  const baseClass = 'logo'

  const getClassName = block(baseClass)

  return `
    <a class="${getClassName()}" href="#">
      <img class="${getClassName('icon')}" src="${logo}" alt="logo" />
    </a>
  `
}

export { Logo }