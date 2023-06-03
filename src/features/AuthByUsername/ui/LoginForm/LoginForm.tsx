import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, SizeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Input type={'text'} className={cls.input} placeholder={'Username'} autoFocus={true}/>
          <Input type={'text'} className={cls.input} placeholder={'Password'}/>
          <Button className={cls.loginBtn} >{t('войти')}</Button>
      </div>
  )
}
