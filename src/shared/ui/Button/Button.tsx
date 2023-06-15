import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: SizeButton
  disabled?: boolean

}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    disabled,
    size = SizeButton.M,
    ...otherProps
  } = props

  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled
  }

  return (
      <button
          className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
          disabled={disabled}
          {...otherProps}
        >
          {children}
      </button>
  )
})
