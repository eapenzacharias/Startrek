import { getLikes } from './interaction.js';
import mainDisplay from './mainDisplay.js';
import { createElement, getElement } from './querySelectors.js';
import { dragons, itemCounter, rockets } from './spaceData.js';

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
  const rocketsData = JSON.parse(sessionStorage.getItem('rocketsData'));
  const dragonsData = JSON.parse(sessionStorage.getItem('dragonsData'));
  const rocketCount = itemCounter(rocketsData);
  const dragonCount = itemCounter(dragonsData);
  const menu = createElement('ul');
  menu.className = 'nav navbar-nav';
  const rocketContainer = createElement('li');
  let rockets = createElement('a');
  rockets.className = 'nav-link';
  rockets.innerText = `Rockets (${rocketCount})`;
  const shipsContainer = createElement('li');
  let ships = createElement('a');
  ships.className = 'nav-link';
  ships.innerText = `Capsules (${dragonCount})`;
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
  const text = 'Created by <a href="https://github.com/eapenzacharias" target="_blank" class="badge bg-light text-dark">@eapenzacharias</a> & <a href="https://github.com/JasemDuncan" target="_blank" class="badge bg-light text-dark">@jasemduncan</a>';
  container.className = 'container-fluid';
  container.innerHTML = text;

  footer.appendChild(container);
  return footer;
};

const appInit = async () => {
  await rockets()
    .then(() => dragons())
    .then(() => getLikes())
    .then(() => header())
    .then(() => {
      mainDisplay('rocketsData');
      getElement('#loading').className = 'hidden-loader';
    });
};

export { header, footer, appInit };