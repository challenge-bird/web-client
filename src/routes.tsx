import { lazy } from 'react';

const Main = lazy(() => import('./pages/Main'));
const SignIn = lazy(() => import('./pages/SignIn'));
const NotFound = lazy(() => import('./pages/404'));

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
    path: '/signin',
    component: SignIn
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes;