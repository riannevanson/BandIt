export const PROFILE_FORM = 'PROFILE_FORM'

export const profileForm = (name, genre, skillLevel) => {
  console.log('hi will be added band')
  return {
    type: PROFILE_FORM,
    payload: {
      name,
      genre,
      skillLevel
    }
  }
}
