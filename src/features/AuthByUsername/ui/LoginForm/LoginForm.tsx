import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from
  'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from
  'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from
  'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, type ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface LoginFormProps {
  className?: string
  onSuccess?: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const result = await dispatch(loginByUsername({ password, username }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.()
    }
  }, [dispatch, onSuccess, password, username])

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
                  //  eslint-disable-next-line
                  onClick={onLoginClick}
                  disabled={isLoading}
              >{t('войти')}
              </Button>
          </div>
      </DynamicModuleLoader>

  )
})

export default LoginForm
