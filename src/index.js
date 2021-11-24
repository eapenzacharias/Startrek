import 'bootstrap/dist/css/bootstrap.min.css';
import { getElement } from './scripts/querySelectors.js';
import { header, footer, appInit } from './scripts/uiInit.js';
import './style/style.scss';

getElement('#main').prepend(header());
getElement('#main').appendChild(footer());
appInit();