import { Home } from '../pages/Home/Home';
import { Home2 } from '../pages/Home2/Home2';
import { SignIn } from '../../src/pages/SignIn/SignIn';

export const routes = [
  {
    path: '/home2',
    component: Home2,
  },
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/',
    component: Home,
  },
];
