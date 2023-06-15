import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(() => {
  const { t } = useTranslation('main')

  return (
      <div style={{ color: 'red' }}>
          {t('Главная')}
      </div>
  )
})

export default MainPage
