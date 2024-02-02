import './index.scss'
import closeBtn from '@/shared/assets/icons/cross.svg'
import { block } from '@/shared/lib'
import { Button } from '@/shared/ui/button'

function Form() {
  const baseClass = 'form'

  const getClassName = block(baseClass)

  return `
    <form class="${getClassName()}" data-form>
      <h2 class="${getClassName('title')}">SEND US MESSAGE</h2>

      <label 
        class="${getClassName('label')}" 
        for="fullName"
        >
        Full Name
      </label>
      <input 
        class="${getClassName('input')}" 
        type="text" id="fullName" name="fullName" 
        placeholder="Your Name">

      <label 
        class="${getClassName('label')}" 
        for="email"
        >
        Email
      </label>
      <input 
        class="${getClassName('input')}" 
        type="email" id="email" name="email" 
        placeholder="Your Email">

      <label 
        class="${getClassName('label')}" 
        for="message"
        >
        Message
      </label>
      <textarea
        class="${getClassName('input', { textarea: true })}" 
        id="message" 
        name="message" 
        rows="4" 
        placeholder="Your Message"></textarea>

      ${Button({
        value: 'SUBMIT',
        type: 'submit',
        className: getClassName('button'),
        extraAttrs: 'data-submit-btn',
      })}
      <div class="${getClassName('close')}" data-close-btn>
        <img src="${closeBtn}" alt="close" />
      </div>
    </form>
  `
}

export { Form }
