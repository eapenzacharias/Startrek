import { postLikes } from './interaction.js';
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

const liker = (id, likesCount) => {
  const likesData = JSON.parse(sessionStorage.getItem('likesData'));
  let objIndex = likesData.findIndex((obj) => obj.item_id === id);
  if (objIndex === -1) {
    likesData.push({ likes: 0, item_id: id });
    objIndex = likesData.findIndex((obj) => obj.item_id === id);
  }
  likesData[objIndex].likes += 1;
  window.sessionStorage.setItem('likesData', JSON.stringify(likesData));
  likesCount.innerText = likesData[objIndex].likes;
  postLikes(id);
};

const generateCards = (item) => {
  const likesData = JSON.parse(sessionStorage.getItem('likesData'));
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
  const likeCount = createElement('span');
  likeCount.className = 'like-count btn btn-sm';
  likeCount.innerText = '0';
  likeBtn.addEventListener('click', () => {
    likeBtn.className = 'like-btn btn btn-sm liked';
    liker(item.id, likeCount);
  });
  const likes = likesData.filter((e) => e.item_id === item.id);
  if (likes.length > 0) {
    likeCount.innerText = likes[0].likes;
  }
  cardBody.appendChild(commentBtn);
  likeBtn.appendChild(likeCount);
  cardBody.appendChild(likeBtn);
  cardBody.appendChild(likeCount);
  card.appendChild(cardBody);
  getElement('#card-container').appendChild(card);
};

const mainDisplay = async (id) => {
  getElement('#card-container').innerHTML = '';
  const ships = JSON.parse(sessionStorage.getItem(id));
  ships.forEach((e) => {
    generateCards(e);
  });
};

export default mainDisplay;