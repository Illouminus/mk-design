import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slice/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlesPageError, getArticlesPageHasMore,
  getArticlesPageIsLoading, getArticlesPageNum,
  getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage }
  from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const page = useSelector(getArticlesPageNum)
  const hasMore = useSelector(getArticlesPageHasMore)
  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({
      page: 1
    }))
  })

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])
  return (
      <DynamicModuleLoader reducers={reducers}>
          <Page
              onScrollEnd={onLoadNextPart}
              className={classNames('', {}, [className])}
          >
              <ArticleViewSelector view={view} onViewClick={onChangeView} />
              <ArticleList
                  articles={articles}
                  view={view}
                  isLoading={isLoading}
              />
          </Page>
      </DynamicModuleLoader>

  )
}

export default memo(ArticlesPage)
