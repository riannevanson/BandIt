export const SIGNUP_FORM = 'SIGNUP_FORM'

export const signUpForm = (username, email, password, confirm) => {
  return {
    type: SIGNUP_FORM,
    payload: {
      username,
      email,
      password,
      confirm
    }
  }
}
