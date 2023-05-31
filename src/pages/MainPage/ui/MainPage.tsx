import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

const MainPage: FC = () => {
  const { t } = useTranslation('main')
  return (
      <div>
          <BugButton />
          {t('Главная')}
      </div>
  )
}

export default MainPage
