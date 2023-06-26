import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article'
import ListIcon from 'shared/assets/icons/list.svg'
import TileIcon from 'shared/assets/icons/tile.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TileIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const {
    className,
    view,
    onViewClick
  } = props
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => {
    return () => {
      onViewClick(newView)
    }
  }
  return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map(viewType => (
              <Button
                  theme={ThemeButton.CLEAR}
                  onClick={onClick(viewType.view)}
                  key={viewType.view}
              >
                  <Icon Svg={viewType.icon}
                      className={classNames('', { [cls.selected]: viewType.view !== view })}
                  />
              </Button>
          ))}
      </div>
  )
})
