import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe(' getProfileData.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123'
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })
  test('should with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
