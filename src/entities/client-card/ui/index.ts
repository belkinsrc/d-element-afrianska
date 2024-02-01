import './index.scss'
import { block } from "@/shared/lib"

interface ClientCardProps {
  id: number
}

function ClientCard({ id }: ClientCardProps) {
  const baseClass = 'client'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <a class="${getClassName('link')}">
        LOGO CLIENT ${id}
      </a>
    </div>
  `
}

export { ClientCard }