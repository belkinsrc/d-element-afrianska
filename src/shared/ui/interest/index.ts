import './index.scss'
import { block } from '@/shared/lib'

function Interest() {
  const baseClass = 'interest'

  const getClassName = block(baseClass)

  return `
    <section class="${getClassName()}">
      <h2 class="${getClassName('title')}">
        Intersted to woek
        with our team?
      </h2>
      <p class="${getClassName('subtitle')}">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam.
      </p>
    </section>
  `
}

export { Interest }
