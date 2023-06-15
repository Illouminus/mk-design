import { classNames } from 'shared/lib/classNames/classNames'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button'
import { SidebarItemList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

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
              {SidebarItemList.map((item) => (
                  <SidebarItem
                      key={item.path}
                      item={item}
                      collapsed={collapsed}
                  />
              ))}

          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed}/>
          </div>
      </div>
  )
}
