import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { type MutableRefObject, type ReactNode, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const {
    className,
    children,
    onScrollEnd
  } = props

  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useInfiniteScroll({
    triggerRef: triggerRef as MutableRefObject<HTMLElement>,
    wrapperRef: wrapperRef as MutableRefObject<HTMLElement>,
    callback: onScrollEnd
  })

  return (
      <section
          ref={wrapperRef}
          className={classNames(cls.Page, {}, [className])}
      >
          {children}
          <div ref={triggerRef}/>
      </section>
  )
}
