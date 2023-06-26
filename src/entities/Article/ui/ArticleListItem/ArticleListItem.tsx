import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleListItem.module.scss'
import {
  type Article, ArticleBlockType,
  type ArticleTextBlock, ArticleView
} from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/icons/vue.svg'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view
  } = props
  const { t } = useTranslation('article')
  const navigate = useNavigate()
  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id)
  }, [article.id, navigate])
  const types = <Text text={article.type.join(', ')} className={cls.types}/>
  const views = (
      <div className={cls.infoIcons}>
          <Text text={String(article.views)} className={cls.views}/>
          <EyeIcon />
      </div>
  )
  if (view === ArticleView.LIST) {
    const textBlock =
        article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar}/>
                    <Text text={article.user.username} className={cls.username}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <Text title={article.title} className={cls.title}/>
                {types}
                <img src={article.img} className={cls.img} alt={article.title}/>
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                )}
                <div className={cls.footer}>
                    <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
                        {t('Читать далее')}
                    </Button>
                </div>
            </Card>
        </div>
    )
  }

  return (

      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <Card className={cls.card} onClick={onOpenArticle}>
              <div className={cls.imageWrapper}>
                  <img src={article.img} className={cls.img}/>
                  <Text text={article.createdAt} className={cls.date}/>
              </div>
              <div className={cls.infoWrapper}>
                  {types}
                  {views}
              </div>
              <Text text={article.title} className={cls.title}/>
          </Card>
      </div>
  )
})
