import 'bootstrap/dist/css/bootstrap.min.css';
import { getElement } from './scripts/querySelectors.js';
import { rockets, ships } from './scripts/spaceData.js';
import { header, footer } from './scripts/uiInit.js';
import './style/style.scss';

getElement('#main').appendChild(header());
getElement('#main').appendChild(footer());

rockets();
ships();