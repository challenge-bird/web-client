import { lazy } from 'react';

const Main = lazy(() => import('../pages/main/Main'));
const SignIn = lazy(() => import('../pages/main/SignIn'));
const NotFound = lazy(() => import('../pages/main/404'));

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