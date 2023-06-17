import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import * as stream from 'stream'

interface ArticlesDetailsPageProps {
  className?: string
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </div>
    )
  }
  return (
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
          <ArticleDetails id={id}/>
      </div>
  )
}

export default memo(ArticlesDetailsPage)
