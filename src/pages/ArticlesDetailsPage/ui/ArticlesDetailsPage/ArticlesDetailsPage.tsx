import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentReducer,
  getArticleComments
} from '../../model/slices/ArticleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle }
  from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'shared/ui/Page/Page'

interface ArticlesDetailsPageProps {
  className?: string
}

const reducerList: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const comment = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const navigate = useNavigate()
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])
  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  if (!id) {
    return (
        <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </Page>
    )
  }
  return (
      <DynamicModuleLoader reducers={reducerList} removeAfterUnmount={true}>
          <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
              <Button
                  onClick={onBackToList}
              >
                  {t('Назад к списку')}
              </Button>
              <ArticleDetails id={id}/>
              <Text title={t('Коментарии')} className={cls.commentTitle}/>
              <AddCommentForm onSendComment={onSendComment}/>
              <CommentList
                  comments={comment}
                  isLoading={commentsIsLoading}
              />
          </Page>
      </DynamicModuleLoader>

  )
}

export default memo(ArticlesDetailsPage)
