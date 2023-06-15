import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe(' getProfileForm.test', () => {
  test('should return data', () => {
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
        form: data
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test('should with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
