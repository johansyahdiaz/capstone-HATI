import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import Logout from '../pages/logut';
import RegisterPage from '../pages/register-page';
import AboutPage from '../pages/about-page';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/logout': Logout,
  '/register': RegisterPage,
  '/about': AboutPage,
};

export default routes;
