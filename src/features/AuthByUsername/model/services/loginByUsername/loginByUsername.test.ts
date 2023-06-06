import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)
describe('loginByUsername.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })
  test('success login', async () => {
    const userValue = { username: '123', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.CallThunk({ password: '123', username: '123' })
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(userValue)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.CallThunk({ password: '123', username: '123' })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Вы ввели невыерный логин или пароль')
  })
})
