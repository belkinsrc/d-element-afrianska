import './index.scss'
import { block } from '@/shared/lib'

interface FooterContactsProps {
  title: string
  items: string[],
  className?: string
}

function FooterContacts({ title, items, className }: FooterContactsProps) {
  const baseClass = 'contacts'

  const getClassName = block(baseClass)

  return `
    <article class="${getClassName()} ${className || ''}">
      <h3 class="${getClassName('title')}">${title}</h3>
      <nav class="${getClassName('nav')}">
        <ul class="${getClassName('list')}">
          ${items.map(item => `
            <li class="${getClassName('item')}">
              <a class="${getClassName('link')}" href="#">
                ${item}
              </a>
            </li>
          `).join(" ")}
        </ul>
      </nav>
    </article>
  `
}

export { FooterContacts }