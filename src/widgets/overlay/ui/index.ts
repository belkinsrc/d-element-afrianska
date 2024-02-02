import './index.scss'
import { block } from '@/shared/lib'
import { Form } from '@/entities/form'
import { SuccessModal } from '@/shared/ui/success-modal'

function Overlay() {
  const baseClass = 'overlay'
  
  const getClassName = block(baseClass)

  return `
    <div class="${getClassName()}" data-overlay>
      ${Form()}
      ${SuccessModal()}
    </div>
  `
}

export { Overlay }