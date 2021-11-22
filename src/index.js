import 'bootstrap/dist/css/bootstrap.min.css';
import { getElement } from './scripts/querySelectors';
import { header } from './scripts/uiInit';
import './style/style.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World';
  return element;
}

getElement('#main').appendChild(header());