import { lazy } from 'react';

const SignIn = lazy(() => import('./pages/SignIn'));
const NotFound = lazy(() => import('./pages/404'));

const Main = lazy(() => import('./pages/Main'));
const Home = lazy(() => import('./pages/Home'));
const Link = lazy(() => import('./pages/Link'));

interface RouteType {
  path: string;
  component: React.ComponentType;
}

const routes: RouteType[] = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Link',
    component: Link
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes;