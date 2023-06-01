import React, { type FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <Button
              theme={ThemeButton.OUTLINE}
              className={cls.links}
              onClick={onToggleModal}
          >
              {t('Войти')}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal} />

      </div>
  )
}
