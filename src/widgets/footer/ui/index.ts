import './index.scss'
import { block } from '@/shared/lib'
import { extraClasses } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Interest } from '@/shared/ui/interest'
import { FooterContacts } from '@/shared/ui/footer-contacts'

function Footer() {
  const baseClass = 'footer'

  const getClassName = block(baseClass)

  return `
    <footer class="${getClassName()}">
      <div class="${getClassName('top')}">
        <div class="${extraClasses.container} ${getClassName('container-top')}">
          ${Interest()}
          ${Button({
            value: 'Let’s Talk',
            className: getClassName('button'),
            extraAttrs: 'data-open-form-btn',
          })}
        </div>
      </div>
      <div class="${getClassName('bottom')}">
        <div class="${extraClasses.container} ${getClassName('container-bottom')}">
          <div class="${getClassName('details')}">
            <article class="${getClassName('contacts', { main: true })}">
              <div class="${getClassName('logo')}">
                Afrianska
              </div>
              <div class="${getClassName('info')}">
                <p class="${getClassName('link', { base: true })}">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <a class="${getClassName('link', { tel: true })}" 
                    href="tel:+6281273134321">
                  +62-812-7313-4321
                </a>
                <a class="${getClassName('link', { email: true })}" 
                    href="mailto:hello.afrian@gmail.com">
                  hello.afrian@gmail.com
                </a>
              </div>
            </article>
            ${FooterContacts({
              title: 'About US',
              items: ['About', 'What We Do', 'Project', 'How It Work With Us'],
              className: getClassName('contacts', { about: true }),
            })}
            ${FooterContacts({
              title: 'Follow US',
              items: ['Instagram', 'Facebook', 'LinkedIn', 'Youtube'],
              className: getClassName('contacts', { follow: true }),
            })}
          </div>
          <small class="${getClassName('copyright')}">
            2019 © Afrianska. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  `
}

export { Footer }
