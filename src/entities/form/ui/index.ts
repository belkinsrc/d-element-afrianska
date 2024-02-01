import './index.scss'
import { block } from '@/shared/lib'
import { Button } from '@/shared/ui/button'

function Form() {
  const baseClass = 'form'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}">
      <form class="${getClassName('body')}">
          <h2 class="${getClassName('title')}">SEND US MESSAGE</h2>

          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Your Name">

          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email">

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>

          ${Button({ value: 'SUBMIT', className: getClassName('button') })}
      </form>
    </div>
  `
}

export { Form }
