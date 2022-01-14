import { lazy } from 'react';

const Login = lazy(() => import('./pages/LogIn'));
const NotFound = lazy(() => import('./pages/404'));

interface RouteType {
  path: string;
  component: React.ComponentType;
}

const routes: RouteType[] = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes;