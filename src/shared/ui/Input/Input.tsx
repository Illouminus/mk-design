import React, { type FC, type InputHTMLAttributes, memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  placeholder?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
}

export const Input: FC<InputProps> = memo((options: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = options

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }
  const mods: Mods = {
    [cls.readonly]: readonly
  }
  return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
          <input
              type={type}
              value={value}
              placeholder={placeholder && placeholder}
              onChange={onChangeHandler}
              className={cls.input}
              autoFocus={autoFocus}
              readOnly={readonly}
              {...otherProps}
          />
      </div>
  )
})
