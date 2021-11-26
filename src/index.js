import 'bootstrap/dist/css/bootstrap.min.css';
import { getElement } from './scripts/querySelectors.js';
import { footer, appInit } from './scripts/uiInit.js';
import './style/style.scss';

getElement('#main').appendChild(footer());
appInit();