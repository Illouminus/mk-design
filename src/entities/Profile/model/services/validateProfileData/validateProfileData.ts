import { type Profile, ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const {
    country,
    first,
    city,
    lastname,
    age
  } = profile
  const errors: ValidateProfileError[] = []

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(ValidateProfileError.INCORRECT_USER_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_USER_COUNTRY)
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_USER_CITY)
  }

  return errors
}
