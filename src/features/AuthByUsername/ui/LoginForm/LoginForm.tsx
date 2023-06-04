import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // @ts-expect-error adf
    dispatch(loginByUsername({ password, username }))
  }, [dispatch, password, username])

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Форма авторизации')}/>
          {error && <Text text={error} theme={TextTheme.ERROR}/>}
          <Input
              type={'text'}
              className={cls.input}
              placeholder={'Username'}
              autoFocus={true}
              onChange={onChangeUsername}
              value={username}
          />
          <Input
              type={'text'}
              className={cls.input}
              placeholder={'Password'}
              onChange={onChangePassword}
              value={password}
          />
          <Button
              className={cls.loginBtn}
              theme={ThemeButton.OUTLINE}
              onClick={onLoginClick}
              disabled={isLoading}
          >{t('войти')}
          </Button>
      </div>
  )
})
