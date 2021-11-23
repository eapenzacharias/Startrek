import 'bootstrap/dist/css/bootstrap.min.css';
import { mainDisplay } from './scripts/mainDisplay.js';
import { getElement } from './scripts/querySelectors.js';
import { rockets, ships } from './scripts/spaceData.js';
import { header, footer } from './scripts/uiInit.js';
import './style/style.scss';

getElement('#main').prepend(header());
getElement('#main').appendChild(footer());

rockets();
ships();
mainDisplay('rocketsData');