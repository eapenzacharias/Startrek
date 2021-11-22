import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World';
  return element;
}

document.body.appendChild(component());