import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CommentList.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard'
import { type Comment } from '../../model/types/comment'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    comments,
    isLoading,
    className
  } = props
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.CommentList, {}, [className])}>
          {comments?.length
            ? comments.map(comment => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    className={cls.comment}
                    isLoading={isLoading}
                />
            ))
            : <Text text={t('Коментарии отсуствуют')} />
          }
      </div>
  )
})
