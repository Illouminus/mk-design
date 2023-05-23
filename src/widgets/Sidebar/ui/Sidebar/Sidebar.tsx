import { classNames } from 'shared/lib/classNames/classNames';
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss';
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const {t} = useTranslation()
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('Toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
