import { Header } from '@/widgets/header'
import { About } from '@/widgets/about'
import { Services } from '@/widgets/services'

function MainPage() {
  return `
    ${Header()}
    <main class="main">
      ${About()}
      ${Services()}
    </main>
  `
}

export { MainPage }