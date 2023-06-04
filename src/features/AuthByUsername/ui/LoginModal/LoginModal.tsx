import { type FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { Loader } from 'shared/ui/Loader/Loader'

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
          className={classNames('', {}, [className])}
          isOpen={isOpen}
          onClose={onClose}
          lazy
      >
          <Suspense fallback={<Loader />}>
              <LoginFormLazy />
          </Suspense>

      </Modal>
  )
}
