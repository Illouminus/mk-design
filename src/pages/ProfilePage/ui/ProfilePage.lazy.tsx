import { lazy } from 'react'

export const MainPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error this problem can be deleted after

  setTimeout(() => { resolve(import('./ProfilePage')) }, 2000)
}))
