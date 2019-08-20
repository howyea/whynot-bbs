import Home from './Home';
import Login from './Login';
import Register from './Register';
import ValidateEmail from "./ValidateEmail";

import App from './App';

export default [{
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
      },
      {
        path: '/login',
        component: Login,
        exact: true,
      },
      {
        path: '/register',
        component: Register,
        exact: true,
      },
      {
        path: '/validate_email',
        component: ValidateEmail,
        exact: true,
      }
    ]
  }];