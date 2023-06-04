import { type StateSchema } from 'app/providers/StoreProvider'
import { type User } from 'entities/User'

export const getUserAuthData = (state: StateSchema): User => state.user.authData
