import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    data,
    className,
    isLoading,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    readonly,
    error
  } = props
  console.log('ERROR', error)
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
        <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
            <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </div>
    )
  }
  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.data}>
              {data?.avatar &&
                  <div className={cls.avatarWrapper}>
                      <Avatar src={data?.avatar}/>
                  </div>
                  }
              <Input
                  className={cls.input}
                  value={data?.first}
                  onChange={onChangeFirstname}
                  readonly={readonly}
              />
              <Input
                  className={cls.input}
                  value={data?.lastname}
                  onChange={onChangeLastname}
                  readonly={readonly}
              />
              <Input
                  className={cls.input}
                  value={data?.age}
                  onChange={onChangeAge}
                  readonly={readonly}
              />
              <Input
                  className={cls.input}
                  value={data?.city}
                  onChange={onChangeCity}
                  readonly={readonly}
              />
              <Input
                  className={cls.input}
                  value={data?.username}
                  onChange={onChangeUsername}
                  readonly={readonly}
              />
              <Input
                  className={cls.input}
                  value={data?.avatar}
                  onChange={onChangeAvatar}
                  readonly={readonly}
              />
              <CurrencySelect
                  className={cls.input}
                  value={data?.currency}
                  onChange={onChangeCurrency}
                  readonly={readonly}
              />
              <CountrySelect
                  className={cls.input}
                  value={data?.country}
                  onChange={onChangeCountry}
                  readonly={readonly}
              />
          </div>
      </div>
  )
}
