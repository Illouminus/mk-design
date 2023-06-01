import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore (initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
