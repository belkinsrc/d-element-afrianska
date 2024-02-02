import { validateEmail, validateNotEmpty, ValidationFunctions } from '@/shared/validation';

class FormModel {
  private validateEmail: ValidationFunctions['validateEmail']
  private validateNotEmpty: ValidationFunctions['validateNotEmpty']

  constructor() {
    this.validateEmail = validateEmail
    this.validateNotEmpty = validateNotEmpty
    this.submitForm()
  }

  private submitForm() {
    const form: HTMLFormElement = document.querySelector('[data-form]')!
    const successModal: HTMLDivElement = document.querySelector('[data-success-modal]')!

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      if (this.validateForm()) {
        form.style.display = 'none'
        successModal.style.display = 'flex'

        this.resetForm(form)
      }
    })
  }

  private resetForm(form: HTMLFormElement) {
    form.reset()

    const validationMessages: NodeListOf<Element> = form.querySelectorAll('.validation-message')
    validationMessages.forEach(message => message.remove())

    const inputErrors: NodeListOf<Element> = form.querySelectorAll('.input-error')
    inputErrors.forEach(input => input.classList.remove('input-error'))
  }

  private showValidationMessage(inputElement: HTMLInputElement | HTMLTextAreaElement, message: string): void {
    const existingMessage = inputElement.nextElementSibling

    if (existingMessage && existingMessage.classList.contains('validation-message')) {
      existingMessage.remove()
    }

    const validationMessage = document.createElement('div')
    validationMessage.className = 'validation-message'
    validationMessage.textContent = message

    inputElement.classList.add('input-error')
    inputElement.parentNode?.insertBefore(validationMessage, inputElement.nextSibling)
  }

  private validateForm(): boolean {
    const fullNameInput: HTMLInputElement = document.getElementById('fullName') as HTMLInputElement
    const emailInput: HTMLInputElement = document.getElementById('email') as HTMLInputElement
    const messageTextarea: HTMLTextAreaElement = document.getElementById('message') as HTMLTextAreaElement

    const isFullNameValid = this.validateNotEmpty(fullNameInput.value)
    const isEmailValid = this.validateEmail(emailInput.value)
    const isMessageValid = this.validateNotEmpty(messageTextarea.value)

    if (!isFullNameValid) {
      this.showValidationMessage(fullNameInput, 'Please enter your full name')
    }

    if (!isEmailValid) {
      this.showValidationMessage(emailInput, 'Please enter a valid email address')
    }

    if (!isMessageValid) {
      this.showValidationMessage(messageTextarea, 'Please enter your message')
    }

    return isFullNameValid && isEmailValid && isMessageValid
  }
  
}

export { FormModel }
