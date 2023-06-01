import React, { type FC, type ReactNode, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = (options: ModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    children
  } = options

  const { t } = useTranslation()

  const { theme } = useTheme()

  const closeHandler = (): void => {
    if (onClose) {
      onClose()
    }
  }

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent): void => {
      if (e.code === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', keyHandler)

    return () => {
      window.removeEventListener('keydown', keyHandler)
    }
  }, [isOpen, onClose])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div
                      className={cls.content} onClick={onContentClick}>
                      {children}
                  </div>
              </div>
          </div>
      </Portal>

  )
}
