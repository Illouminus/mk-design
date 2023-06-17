import { type StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailIsLoading,
  getArticleDetailError
} from './articleDetails'

describe('articleDetails.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailError(state as StateSchema)).toEqual('error')
  })
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailError(state as StateSchema)).toEqual(undefined)
  })
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailIsLoading(state as StateSchema)).toEqual(false)
  })
})
