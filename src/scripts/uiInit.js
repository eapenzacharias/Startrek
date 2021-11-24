import { getLikes } from './interaction.js';
import mainDisplay from './mainDisplay.js';
import { createElement, getElement } from './querySelectors.js';
import { dragons, rockets } from './spaceData.js';

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
  const menuDiv = getElement('#navbarNav');
  menuDiv.appendChild(menu);
};

const footer = () => {
  const footer = getElement('#foot-text-area');
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