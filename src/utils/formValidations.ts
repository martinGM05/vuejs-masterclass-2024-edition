export const validateEmail = (email: string) => {
  const trimedEmail = email.trim()
  if (!trimedEmail) return []

  const errors = []
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isValidEmailFormat = emailRegex.test(trimedEmail)

  if (!isValidEmailFormat) errors.push('Invalid email format')

  return errors
}

export const validatePassword = (password: string) => {
  const trimedPassword = password.trim()
  if (!trimedPassword) return []

  const errors = []
  const minLength = 6
  const hasUpperCase = /[A-Z]/.test(trimedPassword)
  const hasLowerCase = /[a-z]/.test(trimedPassword)
  const hasNumber = /\d/.test(trimedPassword)
  const hasSpecialChar = /[!@#$%^&*]/.test(trimedPassword)

  if (trimedPassword.length < minLength) errors.push('Password must be at least 6 characters long')
  if (!hasUpperCase) errors.push('Password must contain at least one uppercase letter')
  if (!hasLowerCase) errors.push('Password must contain at least one lowercase letter')
  if (!hasNumber) errors.push('Password must contain at least one number')
  if (hasSpecialChar) errors.push('Password must not contain special characters')

  return errors
}
