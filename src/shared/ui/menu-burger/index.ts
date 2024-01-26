import { block } from '@/shared/lib'

function MenuBurger() {

  const baseClass = 'menu-burger'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <span class="${getClassName('line')}"></span>
    </div>
  `
}

export { MenuBurger }