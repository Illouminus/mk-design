import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

// Define the initial state using that type
const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
