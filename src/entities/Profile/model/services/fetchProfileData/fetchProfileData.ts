import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>('/profile/' + profileId)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(i18n.t('error'))
    }
  }
)
