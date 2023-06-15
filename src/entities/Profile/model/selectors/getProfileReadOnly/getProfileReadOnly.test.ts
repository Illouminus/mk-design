import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe(' getProfileReadOnly.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true)
  })
  test('should with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
  })
})
