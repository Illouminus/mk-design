import { memo, type ReactNode, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import CodeIcon from 'shared/assets/icons/copy.svg'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text)
  }, [text])
  return (
      <pre className={classNames(cls.Code, {}, [className])}>
          <Button
              className={cls.copyBtn}
              theme={ThemeButton.CLEAR}
              onClick={onCopy}
          >
              <CodeIcon />
          </Button>
          <code>
              {text}
          </code>
      </pre>
  )
})
