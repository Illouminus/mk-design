import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  ArticleDetailsCommentReducer,
  getArticleComments
} from '../../model/slices/ArticleDetailsCommentSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticlesDetailsPageProps {
  className?: string
}

const reducerList: ReducersList = {
  articleDetailsComments: ArticleDetailsCommentReducer
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const comment = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  if (!id) {
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </div>
    )
  }
  return (
      <DynamicModuleLoader reducers={reducerList} removeAfterUnmount={true}>
          <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
              <ArticleDetails id={id}/>
              <Text title={t('Коментарии')} className={cls.commentTitle}/>
              <CommentList
                  comments={comment}
                  isLoading={commentsIsLoading}
              />
          </div>
      </DynamicModuleLoader>

  )
}

export default memo(ArticlesDetailsPage)
