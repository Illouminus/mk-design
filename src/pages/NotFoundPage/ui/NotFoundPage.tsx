import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'
import { type FC } from 'react'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
          {t('Страница не найдена')}
      </div>
  )
}
