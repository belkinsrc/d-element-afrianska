import './index.scss'
import illustration from '@/shared/assets/images/illustration.svg'
import { block, extraClasses } from '@/shared/lib'
import { AboutUs } from '@/shared/ui/about-us'

function About() {

  const baseClass = 'about'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <div class="${extraClasses.container}">
        ${AboutUs()}
        <img class="${getClassName('illustration')}" 
             src="${illustration}" 
             alt="illustration" />
      </div>
    </div>
  `
}

export { About }
