export const SUBMIT_FORM = 'SUBMIT_FORM'

export const submitForm = (username, password) => {
  return {
    type: SUBMIT_FORM,
    payload: {
      username,
      password
    }
  }
}
