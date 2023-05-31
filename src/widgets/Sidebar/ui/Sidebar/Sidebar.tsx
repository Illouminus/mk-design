import { classNames } from 'shared/lib/classNames/classNames'
import React, { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher'
import { useTranslation } from 'react-i18next'

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
          <button data-testid="sidebar-toggle" onClick={onToggle}>{t('Toggle')}</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
          </div>
      </div>
  )
}
