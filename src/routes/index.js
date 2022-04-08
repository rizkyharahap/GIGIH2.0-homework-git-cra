import PageNotFound from '../pages/404';
import AuthCallback from '../pages/callback';
import Home from '../pages/home';
import Login from '../pages/login';

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
    type: 'public',
  },
  {
    path: '/callback',
    component: AuthCallback,
    type: 'public',
  },
  {
    path: '/create-playlist',
    exact: true,
    component: Home,
    type: 'private',
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

export default routes;
