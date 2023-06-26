import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface FetchArticlesList {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
Article[],
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
FetchArticlesList,
ThunkConfig<string>
>(
  'articlePage/fetchCommentsByArticleId',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
