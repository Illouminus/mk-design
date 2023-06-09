import React, { type FC, memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface NavbarProps {
  className?: string
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onLogout}
             >
                {t('Выйти')}
            </Button>
        </header>
    )
  }

  return (
      <header className={classNames(cls.navbar, {}, [className])}>
          <Button
              theme={ThemeButton.OUTLINE}
              className={cls.links}
              onClick={onShowModal}
          >
              {t('Войти')}
          </Button>
          {isAuthModal &&
              <LoginModal
                  isOpen={isAuthModal}
                  onClose={onCloseModal}
          />}

      </header>
  )
})
