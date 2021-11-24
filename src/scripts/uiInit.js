import { getLikes } from './interaction.js';
import mainDisplay from './mainDisplay.js';
import { createElement } from './querySelectors.js';
import { dragons, rockets } from './spaceData.js';

const navHeader = () => {
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
  logoContainer.appendChild(logo);
  navHeader.appendChild(logoContainer);
  container.appendChild(navHeader);
  return [nav, container];
};

const menuEvents = (rockets, ships) => {
  rockets.addEventListener('click', () => {
    rockets.classList.toggle('active');
    mainDisplay('rocketsData');
  });
  ships.addEventListener('click', () => {
    ships.classList.toggle('active');
    mainDisplay('dragonsData');
  });
  return [rockets, ships];
};

const header = () => {
  const [nav, container] = navHeader();
  const menu = createElement('ul');
  menu.className = 'nav navbar-nav';
  const rocketContainer = createElement('li');
  let rockets = createElement('a');
  rockets.className = 'nav-link';
  rockets.innerText = 'Rockets';
  const shipsContainer = createElement('li');
  let ships = createElement('a');
  ships.className = 'nav-link';
  ships.innerText = 'Capsules';
  [rockets, ships] = menuEvents(rockets, ships);
  rocketContainer.appendChild(rockets);
  menu.appendChild(rocketContainer);
  shipsContainer.appendChild(ships);
  menu.appendChild(shipsContainer);
  const menuDiv = createElement('div');
  menuDiv.className = 'nav navbar-nav';
  menuDiv.id = 'navbarNav';
  menuDiv.appendChild(menu);
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

const appInit = async () => {
  await rockets()
    .then(() => dragons())
    .then(() => getLikes())
    .then(() => mainDisplay('rocketsData'));
};

export { header, footer, appInit };