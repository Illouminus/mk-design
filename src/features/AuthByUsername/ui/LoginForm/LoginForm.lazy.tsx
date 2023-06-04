import { lazy } from 'react'

export const LoginFormLazy = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error this problem can be deleted after

  setTimeout(() => { resolve(import('./LoginForm')) }, 2000)
}))
