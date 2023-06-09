import {
  createEntityAdapter,
  createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentAdapter.getInitialState()
)

const ArticleDetailsCommentSlice = createSlice({
  name: 'ArticleDetailsCommentSlice',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<Comment[]>
      ) => {
        state.isLoading = false
        commentAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleDetailsCommentReducer } = ArticleDetailsCommentSlice
