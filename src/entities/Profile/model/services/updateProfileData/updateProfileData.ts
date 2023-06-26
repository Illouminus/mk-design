import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile, ValidateProfileError } from '../../types/profile'
import { getProfileForm } from 'entities/Profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData =
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
      'profile/fetchProfileData',
      async (_, thunkAPI) => {
        const {
          extra,
          rejectWithValue,
          getState
        } = thunkAPI

        const formData = getProfileForm(getState())
        const errors = validateProfileData(formData)

        if (errors.length) {
          return rejectWithValue(errors)
        }

        try {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData)

          if (!response.data) {
            throw new Error()
          }
          return response.data
        } catch (e) {
          console.log(e)
          return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
      }
    )
