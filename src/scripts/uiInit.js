import { createElement } from './querySelectors.js';

const header = () => {
  const nav = createElement('nav');
  nav.className = 'navbar navbar-expand';
  const container = createElement('div');
  container.className = 'container-fluid';

  const logoContainer = createElement('a');
  logoContainer.className = 'navbar-brand';
  const logo = createElement('img');
  logo.src = 'https://intl.startrek.com/themes/custom/startrekbs/images/star-trek-logo.png';
  const navHeader = createElement('div');
  navHeader.className = 'navbar-header';

  const menu = createElement('ul');
  menu.className = 'nav navbar-nav';

  const rocketContainer = createElement('li');
  const rockets = createElement('a');
  rockets.className = 'nav-link';
  rockets.innerText = 'Rockets';
  rocketContainer.appendChild(rockets);
  menu.appendChild(rocketContainer);

  const shipsContainer = createElement('li');
  const ships = createElement('a');
  ships.className = 'nav-link';
  ships.innerText = 'Ships';
  shipsContainer.appendChild(ships);
  menu.appendChild(shipsContainer);

  const menuDiv = createElement('div');
  menuDiv.className = 'nav navbar-nav';
  menuDiv.id = 'navbarNav';
  menuDiv.appendChild(menu);

  logoContainer.appendChild(logo);
  navHeader.appendChild(logoContainer);

  container.appendChild(navHeader);
  container.appendChild(menu);
  nav.appendChild(container);

  return nav;
};

const footer = () => {
  const footer = createElement('footer');
  footer.className = 'footer container-fluid';
  const container = createElement('div');
  container.className = 'container-fluid';
  container.innerText = 'Create by Microverse under CC license';

  footer.appendChild(container);
  return footer;
};

export { header, footer };