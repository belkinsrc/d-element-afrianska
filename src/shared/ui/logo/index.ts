import './index.scss'
import logo from '@/shared/assets/icons/logo.svg'
import { block } from '@/shared/lib'

function Logo() {

  const baseClass = 'logo'

  const getClassName = block(baseClass)

  return `
    <a class="${getClassName()}" href="#">
      <img class="${getClassName('icon')}" src="${logo}" alt="Afrianska logo" />
    </a>
  `
}

export { Logo }