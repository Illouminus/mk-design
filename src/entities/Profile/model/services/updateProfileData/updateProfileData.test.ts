import { updateProfileData } from './updateProfileData'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

const data = {
  first: 'Edouard',
  lastname: 'Baillot',
  age: 26,
  currency: Currency.EUR,
  country: Country.France,
  city: 'Paris',
  username: 'admin',
  id: '1'
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.CallThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.CallThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' }
      }
    })

    const result = await thunk.CallThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})
