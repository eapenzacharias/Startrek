import { createElement, getElement } from './querySelectors.js';

const generateCards = (item) => {
  const card = createElement('div');
  card.className = 'card';
  const image = createElement('img');
  image.className = 'card-img-top';
  const imgSrc = item.flickr_images[0];
  image.src = imgSrc;
  const cardBody = createElement('div');
  cardBody.className = 'card-body';
  const cardTitle = createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.innerText = item.name;
  cardBody.appendChild(cardTitle);
  card.appendChild(image);
  card.appendChild(cardBody);
  getElement('#card-container').appendChild(card);
}

const mainDisplay = () => {
  const ships = JSON.parse(sessionStorage.getItem('rocketsData'));
  ships.forEach((e) => {
    generateCards(e);
  });
};

export { mainDisplay };