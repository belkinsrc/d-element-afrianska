import './index.scss'
import { block } from '@/shared/lib'

interface CardProps {
  baseClass: string
  classMod: { type: string }
  image: string
  title: string
}

function Card({ baseClass, classMod, image, title }: CardProps) {

  const getClassName = block(baseClass)

  return `
    <article class="${getClassName(classMod)}">
      <div class="${getClassName('image')}">
        <img src="${image}" alt="image" />
      </div>
      <div class="${getClassName('content')}">
        <h3 class="${getClassName('title')}">
          ${title}
        </h3>
        <p class="${getClassName('subtitle')}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a class="${getClassName('link')}" href="#">Learn more</a>
      </div>
    </article>
  `
}

export { Card }