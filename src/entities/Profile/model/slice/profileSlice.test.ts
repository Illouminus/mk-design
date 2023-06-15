import { Profile, type ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from 'entities/Profile'

const data = {
  first: 'Edouard',
  lastname: 'Baillot',
  age: 26,
  currency: Currency.EUR,
  country: Country.France,
  city: 'Paris',
  username: 'admin'
}
describe('profileSlice.test', () => {
  test('test readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  })
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      validateError: undefined,
      data,
      form: data
    })
  })
  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: '123456'
      })
    )).toEqual({
      form: {
        username: '123456'
      }
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR]
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      form: data,
      data,
      readonly: true,
      validateError: undefined
    })
  })
})
