/* eslint-disable quotes */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/style.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/config-firebase';
import App from './app';

// eslint-disable-next-line quotes
import "./components/hati-footer";
import "./components/hati-nav";
import "./components/hati-carousel";
import UserData from './utils/user-data';
import UserInfo from './utils/user-info';

initializeApp(firebaseConfig);

if (UserInfo.getUserInfo().uid) {
  UserData.getUserData(UserInfo.getUserInfo().uid).then((data) => {
    if (data.photo) {
      document.querySelector('#profile-button').setAttribute('src', data.photo);
    }
  });
}

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
