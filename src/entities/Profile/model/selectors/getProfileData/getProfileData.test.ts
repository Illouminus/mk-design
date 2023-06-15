import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe(' getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      first: 'Edouard',
      lastname: 'Baillot',
      age: 26,
      currency: Currency.EUR,
      country: Country.France,
      city: 'Paris',
      username: 'admin'
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
