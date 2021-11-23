import popUp from './popUp.js';
import { createElement, getElement } from './querySelectors.js';

const cardTemplate = (item) => {
  const card = createElement('div');
  card.className = 'card';
  const image = createElement('img');
  image.className = 'card-img-top';
  const imgSrc = item.flickr_images[0];
  image.src = imgSrc;
  card.appendChild(image);
  const cardBody = createElement('div');
  cardBody.className = 'card-body';
  const cardTitle = createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.innerText = item.name;
  const cardText = createElement('p');
  cardText.className = 'class-text';
  cardText.innerText = item.description;
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  return [card, cardBody];
};

const generateCards = (item) => {
  const [card, cardBody] = cardTemplate(item);
  const commentBtn = createElement('a');
  commentBtn.className = 'btn btn-sm btn-light';
  commentBtn.innerText = 'Comments';
  commentBtn.addEventListener('click', () => {
    commentBtn.className = 'btn btn-sm btn-dark';
    getElement('#main').appendChild(popUp(item));
    document.getElementById('staticBackdrop').classList = 'displayModal show fade modal';
  });
  const likeBtn = createElement('span');
  likeBtn.className = 'like-btn btn btn-sm';
  likeBtn.addEventListener('click', () => {
    likeBtn.className = 'like-btn btn btn-sm liked';
  });
  cardBody.appendChild(commentBtn);
  cardBody.appendChild(likeBtn);
  card.appendChild(cardBody);
  getElement('#card-container').appendChild(card);
};

const mainDisplay = (id) => {
  getElement('#card-container').innerHTML = '';
  const ships = JSON.parse(sessionStorage.getItem(id));
  ships.forEach((e) => {
    generateCards(e);
  });
};

export default mainDisplay;