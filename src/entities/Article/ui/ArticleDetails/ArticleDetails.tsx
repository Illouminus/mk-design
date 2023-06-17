import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailError,
  getArticleDetailIsLoading,
  getArticleDetailsData
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/vue.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from
  'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from
  'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from
  'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article')

  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
            />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
        />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
            className={cls.block}
            block={block}
            key={block.id}
        />
      default:
        return null
    }
  }, [])
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content
  if (isLoading) {
    content = (
        <div className={cls.skeletonItems}>
            <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
            <Skeleton width={300} height={32} />
            <Skeleton width={600} height={24} />
            <Skeleton width='100%' height={200} />
            <Skeleton width='100%' height={200} />
        </div>
    )
  } else if (error) {
    content = (
        <Text
            align={TextAlign.CENTER}
            title={t('Произошла ошибка при загрузке статьи')}
        />
    )
  } else {
    content = (
        <>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </div>
            <Text
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <div className={cls.articleInfo}>
                <EyeIcon />
                <Text
                    text={String(article?.views)}
                />
            </div>
            <div className={cls.articleInfo}>
                <CalendarIcon />
                <Text
                    text={article?.createdAt}
                />
            </div>
            {article?.blocks.map(renderBlock)}
        </>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>

  )
})
