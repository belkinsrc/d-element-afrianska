import { Card } from '@/shared/ui/card'

interface ServiceCardProps {
  classMod: { type: string }
  title: string,
  image: string
}

function ServiceCard({ classMod, title, image }: ServiceCardProps) {
  const baseClass = 'service-card'

  return Card({ baseClass, classMod, image, title })
}

export { ServiceCard }
