import { type FC, memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entities/Profile'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = memo(({ className }: ProfilePageProps) => {
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { t } = useTranslation('profile')
  const validateErrorTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.INCORRECT_USER_AGE]: t('Некоректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некоректные имя или фамилия'),
    [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Некоректная страна'),
    [ValidateProfileError.INCORRECT_USER_CITY]: t('Некоректный город')
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchProfileData())
    }
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])
  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])
  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])
  const onChangeAge = useCallback((value?: string) => {
    const validateValue = value?.replace(/\D+/gm, '')
    dispatch(profileActions.updateProfile({ age: Number(validateValue || 0) }))
  }, [dispatch])
  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])
  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])
  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])
  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])
  return (
      <DynamicModuleLoader reducers={reducers} >
          <div className={classNames('', {}, [className])}>
              <ProfilePageHeader />
              {validateErrors?.length && validateErrors.map((err) => (
                  <Text
                      key={err}
                      theme={TextTheme.ERROR}
                      text={validateErrorTranslation[err as keyof typeof validateErrorTranslation]}
                  />
              ))}
              <ProfileCard
                  data={formData}
                  isLoading={isLoading}
                  error={error}
                  onChangeFirstname={onChangeFirstname}
                  onChangeLastname={onChangeLastname}
                  readonly={readOnly}
                  onChangeCity={onChangeCity}
                  onChangeAge={onChangeAge}
                  onChangeUsername={onChangeUsername}
                  onChangeAvatar={onChangeAvatar}
                  onChangeCurrency={onChangeCurrency}
                  onChangeCountry={onChangeCountry}
              />
          </div>
      </DynamicModuleLoader>

  )
})

export default ProfilePage
