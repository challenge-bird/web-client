import { lazy } from 'react';

const SignIn = lazy(() => import('./pages/SignIn'));
const NotFound = lazy(() => import('./pages/404'));

interface RouteType {
  path: string;
  component: React.ComponentType;
}

const routes: RouteType[] = [
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