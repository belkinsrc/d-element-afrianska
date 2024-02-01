import './index.scss'
import { block } from '@/shared/lib'
import { Button } from '../button'

function AboutUs() {
  const baseClass = 'about-us'

  const getClassName = block(baseClass)

  return `
    <section class="${getClassName()}">
      <h1 class="${getClassName('title')}">
        New Automation <br/>
        Tool for Your Home
      </h1>
      <p class="${getClassName('subtitle')}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Faucibus tristique vulputate ultrices ut mauris tellus at. 
        Posuere sollicitudin odio tellus elit.
      </p>
      ${Button({value: 'See Our Project'})}
    </section>
  `
}

export { AboutUs }
