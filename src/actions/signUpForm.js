export const LOGIN_FORM = 'LOGIN_FORM'

export const loginForm = (username,email, password, confirm) => {
  return {
    type: LOGIN_FORM,
    payload: {
      username,
      email,
      password,
      confirm
    }
  }
}
