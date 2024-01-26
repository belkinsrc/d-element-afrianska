import './index.scss'
import illustration from '/images/illustration.svg'
import { block } from '@/shared/lib'
import { AboutUs } from '@/shared/ui/about-us'

function About() {

  const baseClass = 'about'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <div class="${getClassName('container')}">
        ${AboutUs()}
        <img class="${getClassName('illustration')}" 
             src="${illustration}" 
             alt="illustration" />
      </div>
    </div>
  `
}

export { About }
