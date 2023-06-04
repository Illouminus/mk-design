import {
  configureStore,
  type DeepPartial,
  type ReducersMapObject,
  type Store
} from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore (initialState: StateSchema,
  asyncReducers?: ReducersMapObject): Store<StateSchema> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
  // @ts-expect-error dsfdf
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
