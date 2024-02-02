import './index.scss'
import envelopeIcon from '@/shared/assets/icons/envelope.svg'
import closeBtn from '@/shared/assets/icons/cross.svg'
import { block } from '@/shared/lib'

function SuccessModal() {

  const baseClass = 'success'

  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}" data-success-modal>
      <div class="${getClassName('icon')}">
        <img src="${envelopeIcon}" alt="icon" />
      </div>
      <div class="${getClassName('message')}">
        We have received your request and will contact you soon.
      </div>
      <div class="${getClassName('close')}" data-close-btn>
        <img src="${closeBtn}" alt="close" />
      </div>
    </div>
  `
}

export { SuccessModal }