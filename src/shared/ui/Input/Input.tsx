import React, { type FC, type InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export const Input: FC<InputProps> = memo((options: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = options

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }
  return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
          <input
              type={type}
              value={value}
              placeholder={placeholder && placeholder}
              onChange={onChangeHandler}
              className={cls.input}
              autoFocus={autoFocus}
              {...otherProps}
          />
      </div>
  )
})
