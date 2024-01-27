import './index.scss'
import { block, extraClasses } from '@/shared/lib'
import { ServiceCard } from '@/entities'

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
          ${ServiceCard({ classMod: { type: 'famous' }, title: 'Make Your business To Be Better Famous In Internet' })}
          ${ServiceCard({ classMod: { type: 'digital' }, title: 'Make Your business To Be Better Famous In Internet' })}
          ${ServiceCard({ classMod: { type: 'technology' }, title: 'Make Your business To Be Better Famous In Internet' })}
        </div>
      </div>
    </div>
  `
}

export { Services }