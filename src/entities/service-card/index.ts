import { Card } from '@/shared/ui/card'
import image from '@/shared/assets/images/digital.svg'

interface ServiceCardProps {
  classMod: { type: string }
  title: string
}

function ServiceCard({ classMod, title }: ServiceCardProps) {
  const baseClass = 'service-card'

  // const images = import.meta.glob('@/shared/assets/images/*.svg')

  return Card({ baseClass, classMod, image, title })
}

export { ServiceCard }
