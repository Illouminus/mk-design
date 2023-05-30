import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error DELETE IN PROD

  setTimeout(() => { resolve(import('./AboutPage')) }, 2000)
}))
