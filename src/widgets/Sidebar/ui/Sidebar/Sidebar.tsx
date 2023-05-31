import { classNames } from 'shared/lib/classNames/classNames'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }
  return (
      <div
          data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapseBtn}
              theme={ThemeButton.BACKGROUND_INVERTED}
              square={true}
              size={SizeButton.XL}
          >
              {collapsed ? '>' : '<'}

          </Button>
          <div className={cls.items}>
              <div className={cls.item}>
                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.main}
                  >
                      <MainIcon className={cls.icon}/>
                      <span className={cls.link}>
                          {t('Главная')}
                      </span>
                  </AppLink>
              </div>
              <div className={cls.item}>

                  <AppLink
                      theme={AppLinkTheme.SECONDARY}
                      to={RoutePath.about}
                  >
                      <AboutIcon className={cls.icon}/>
                      <span className={cls.link}>
                          {t('О сайте')}
                      </span>
                  </AppLink>
              </div>

          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed}/>
          </div>
      </div>
  )
}
