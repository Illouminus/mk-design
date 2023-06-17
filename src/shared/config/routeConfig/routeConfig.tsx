import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  NOT_FOUND = 'not_found'

}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
  [AppRouters.PROFILE]: '/profile',
  [AppRouters.ARTICLES]: '/articles',
  [AppRouters.ARTICLES_DETAILS]: '/articles/',
  [AppRouters.NOT_FOUND]: '*'
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
  [AppRouters.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRouters.ARTICLES_DETAILS]: {
    path: RoutePath.articles_details + ':id',
    element: <ArticlesDetailsPage />,
    authOnly: true
  },
  [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
