import './index.scss'
import famous from '@/shared/assets/images/famous.svg'
import digital from '@/shared/assets/images/digital.svg'
import technology from '@/shared/assets/images/technology.svg'
import { block, extraClasses } from '@/shared/lib'
import { ServiceCard } from '@/entities/service-card'

function Services() {
  const baseClass = 'services'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <div class="${getClassName('container')} ${extraClasses.container}">
        <h2 class="${getClassName('title')}">
          What we do to help <br/>
          our client grow in
          digital era,
        </h2>
        <div class="${getClassName('cards')}">
          ${ServiceCard({
            classMod: { type: 'famous' },
            title: 'Make Your business To Be Better Famous In Internet',
            image: famous
          })}
          ${ServiceCard({
            classMod: { type: 'technology' },
            title: 'Bring Technology To Your Comfrotable Home',
            image: technology
          })}
          ${ServiceCard({
            classMod: { type: 'digital' },
            title: 'Build Your Digital Product That Suitable For Your Need',
            image: digital
          })}
        </div>
      </div>
    </div>
  `
}

export { Services }