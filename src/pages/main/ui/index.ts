import { Header } from '@/widgets/header'
import { About } from '@/widgets/about'
import { Services } from '@/widgets/services'
import { Clients } from '@/widgets/clients'
import { Footer } from '@/widgets/footer'
import { Form } from '@/entities/form'

function MainPage() {
  return `
    ${Header()}
    <main class="main">
      ${About()}
      ${Services()}
      ${Clients()}
    </main>
    ${Footer()}

    ${Form()}
  `
}

export { MainPage }