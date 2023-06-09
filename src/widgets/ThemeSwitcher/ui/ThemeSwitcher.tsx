import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { type FC, memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()

  return (
      <Button
          theme={ThemeButton.CLEAR}
          className={classNames('', {}, [className])}
          onClick={toggleTheme}
        >
          {theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
      </Button>
  )
})
