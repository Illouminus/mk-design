import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme

}

export const Text: FC<TextProps> = (options: TextProps) => {
  const {
    text,
    className,
    title,
    theme = TextTheme.PRIMARY
  } = options

  const { t } = useTranslation()
  return (
      <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
          {title && <p className={cls.title}>{title}</p>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  )
}
