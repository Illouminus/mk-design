import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string
  title?: string | undefined
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((options: TextProps) => {
  const {
    text,
    className,
    title,
    size = TextSize.M,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY
  } = options

  const { t } = useTranslation()
  return (
      <div className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size]
      ])}>
          {title && <p className={cls.title}>{title}</p>}
          {text && <p className={cls.text}>{text}</p>}
      </div>
  )
})
