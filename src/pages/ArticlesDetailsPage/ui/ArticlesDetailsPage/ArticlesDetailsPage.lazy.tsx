import { lazy } from 'react'

export const ArticlesDetailsPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error this problem can be deleted after

  setTimeout(() => { resolve(import('./ArticlesDetailsPage')) }, 2000)
}))
