import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import i18n from 'i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((options: LangSwitcherProps) => {
  const { className, short } = options
  const { t } = useTranslation()

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (

      <Button
          className={classNames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}
            >
          {t(short ? 'Короткий язык' : 'Язык')}
      </Button>

  )
})
