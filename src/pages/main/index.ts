import { Header } from '@/widgets/header'
import { About } from '@/widgets/about'

function MainPage() {
  return `
    ${Header()}
    <main class="main">
      ${About()}
    </main>
  `
}

export { MainPage }
