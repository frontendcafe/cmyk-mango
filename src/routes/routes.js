
import { SignIn } from '../pages/SignIn/SignIn';
import { LogIn } from '../pages/LogIn/LogIn';
import { Home } from '../pages/Home/Home';

  export const routes = [
  {
    path: '/signin',
    component: SignIn,
  },
  {
    path: '/login',
    component: LogIn,
  },
  { 
    path: '/',
    component: Home,
  },
];


