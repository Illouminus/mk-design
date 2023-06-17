import { lazy } from 'react'

export const ArticlesPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error this problem can be deleted after

  setTimeout(() => { resolve(import('./ArticlesPage')) }, 2000)
}))
