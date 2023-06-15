import React, { type FC, type ReactNode, useEffect, useState } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal: FC<ModalProps> = (options: ModalProps) => {
  const {
    className,
    isOpen,
    onClose,
    lazy,
    children
  } = options

  const [isMounted, setIsMounted] = useState(false)

  const closeHandler = (): void => {
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation()
  }

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent): void => {
      if (e.code === 'Escape' && isOpen) {
        onClose?.()
      }
    }

    window.addEventListener('keydown', keyHandler)

    return () => {
      window.removeEventListener('keydown', keyHandler)
    }
  }, [isOpen, onClose])

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  if (lazy && !isMounted) {
    return null
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
