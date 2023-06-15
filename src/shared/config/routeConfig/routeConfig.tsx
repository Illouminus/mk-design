import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'

}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.NOT_FOUND]: '*',
  [AppRouters.PROFILE]: '/profile'
}

export const routeConfig: Record<AppRouters, AppRouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRouters.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
