import App from '@/app'

import { OpenModal } from '@/features/open-modal'
import { CloseModal } from '@/features/close-modal'
import { FormModel } from '@/entities/form'

document.addEventListener('DOMContentLoaded', () => {
  runApp()
  runModels()
  runFeatures()
})

const runApp = () => {
  document.getElementById('app')!.innerHTML = App()
}

const runModels = () => {
  new FormModel()
}

const runFeatures = () => {
  new OpenModal()
  new CloseModal()
}