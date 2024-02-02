interface ValidationFunctions {
  validateEmail: (email: string) => boolean
  validateNotEmpty: (value: string) => boolean
}

const validateEmail: ValidationFunctions['validateEmail'] = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateNotEmpty: ValidationFunctions['validateNotEmpty'] = (value) => {
  return value.trim() !== ''
}

export { validateEmail, validateNotEmpty }
export type { ValidationFunctions }