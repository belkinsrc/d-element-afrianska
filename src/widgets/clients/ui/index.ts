import './index.scss'
import { block, extraClasses } from '@/shared/lib'
import { clientsData } from '@/shared/data/clients'
import { ClientCard } from '@/entities/client-card'

function Clients() {

  const baseClass = 'clients'

  const getClassName = block(baseClass)

  const classes = {
    client: block('client')
  }

  return `
    <div class="${getClassName()}">
      <div class="${extraClasses.container}">
        <section class="${getClassName('header')}">
          <h2 class="${getClassName('title')}">
            Our Beloved
            Client
          </h2>
          <p class="${getClassName('subtitle')}">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
        </section>
        <div class="${getClassName('list')}">
          ${clientsData.map(({ id }) => ClientCard({ id })).join(" ")}
          <div class="${classes.client({clients: 'more'})}">
            <span class="${classes.client('link')}">
              More Client
            </span>
          </div>
        </div>
      </div>
    </div>
  `
}

export { Clients }