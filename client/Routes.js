import Home from './Home';
import Login from './Login';
import Register from './Register';
import ValidateEmail from "./ValidateEmail";
import Edit from "./Edit";
import Detail from "./Detail";

import App from './App';
const routes = [
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
    },
    {
      path: '/edit',
      component: Edit,
      exact: true,
    },
    {
        path: '/topic_detail',
        component: Detail,
        exact: true,
    }
  ];
export default [{
    component: App,
    routes
  }];