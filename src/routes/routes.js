import { SignIn } from '../pages/SignIn/SignIn';
import { LogIn } from '../pages/LogIn/LogIn';
import { Home } from '../pages/Home/Home';
import { Confirmation } from '../pages/Confirmation/Confirmation';

  export const routes = [
  {
    path: '/confirmation',
    component: Confirmation,
  },
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


