/* eslint-disable quotes */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/config-firebase';
import App from './app';

// eslint-disable-next-line quotes
import "./components/hati-footer";
import "./components/hati-nav";

initializeApp(firebaseConfig);

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
