import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import Logout from '../pages/logut';
import RegisterPage from '../pages/register-page';
import AboutPage from '../pages/about-page';
import AdminPage from '../pages/admin-page';
import MarketplacePage from '../pages/marketList-page';
import ProfilePage from '../pages/profile';
import AddProductPage from '../pages/add-product';

const routes = {
  '/': HomePage,
  '/login': LoginPage,
  '/logout': Logout,
  '/register': RegisterPage,
  '/marketplace': MarketplacePage,
  '/about': AboutPage,
  '/admin': AdminPage,
  '/profile': ProfilePage,
  '/add-product': AddProductPage,
};

export default routes;
