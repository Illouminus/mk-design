import { configureStore, type ReducersMapObject, type Store } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore (initialState: StateSchema): Store<StateSchema> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
