import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from 'entities/Comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    comment,
    className,
    isLoading
  } = props

  if (isLoading) {
    return (
        <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
            <div className={cls.header}>
                <Skeleton height={30} width={30} border={'50%'} />
                <Skeleton height={16} width={100}/>
            </div>
            <Skeleton width={'100%'} height={50} className={cls.text}/>
        </div>
    )
  }

  if (!comment) {
    return null
  }
  return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
          <div className={cls.header}>
              <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
                  {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                  <Text text={comment.user.username}/>
              </AppLink>
          </div>
          <Text text={comment.text} className={cls.text}/>
      </div>
  )
})
