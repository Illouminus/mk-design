import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<string>
>(
  'articlePage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const limit = getArticlesPageLimit(getState())
    const isLoading = getArticlesPageIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      void dispatch(fetchArticlesList({
        page: page + 1
      }))
    }
  }
)
