import './index.scss'
import { block } from '@/shared/lib'
import { Logo } from '@/shared/ui/logo'
import { MenuBurger } from '@/shared/ui/menu-burger'

function Header() {
  const baseClass = 'header'

  const getClassName = block(baseClass)

  return `
    <header class="${getClassName()}">
      <div class="${getClassName('container')}">
        ${Logo()}
        ${MenuBurger()}
      </div>
    </header>
  `
}

export { Header }
