import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const LoginModal: FC<LoginModalProps> = (options: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = options

  const { t } = useTranslation()
  return (
      <Modal
          className={classNames(cls.LoginModal, {}, [className])}
          isOpen={isOpen}
          onClose={onClose}
          lazy
      >
          <LoginForm />
      </Modal>
  )
}
