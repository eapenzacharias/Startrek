import { likesCounter, postLikes } from './interaction.js';
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
  let likedIDs = JSON.parse(sessionStorage.getItem('likedIDs'));
  if (!likedIDs) likedIDs = [];
  let objIndex = likesData.findIndex((obj) => obj.item_id === id);
  if (objIndex === -1) {
    likesData.push({ likes: 0, item_id: id });
    objIndex = likesData.findIndex((obj) => obj.item_id === id);
  }
  likedIDs.push(id);
  window.sessionStorage.setItem('likedIDs', JSON.stringify(likedIDs));
  likesCount.innerText = likesCounter(likesData, objIndex);
  postLikes(id);
};

const setLikeSpan = (id) => {
  const likesData = JSON.parse(sessionStorage.getItem('likesData'));
  let likedIDs = JSON.parse(sessionStorage.getItem('likedIDs'));
  if (!likedIDs) likedIDs = [];
  const likeBtn = createElement('span');
  likeBtn.className = 'like-btn btn btn-sm';
  const likeCount = createElement('span');
  likeCount.className = 'like-count btn btn-sm';
  likeCount.innerText = '0';

  if (likedIDs.find((e) => e === id)) {
    likeBtn.className = 'like-btn btn btn-sm liked';
  } else {
    likeBtn.addEventListener('click', () => {
      likeBtn.className = 'like-btn btn btn-sm liked';
      liker(id, likeCount);
    }, { once: true });
  }
  const likes = likesData.filter((e) => e.item_id === id);
  if (likes.length > 0) {
    likeCount.innerText = likes[0].likes;
  }
  return [likeBtn, likeCount];
};

const generateCards = (item) => {
  const [card, cardBody] = cardTemplate(item);
  const commentBtn = createElement('a');
  commentBtn.className = 'btn btn-sm btn-light';
  commentBtn.innerText = 'Comments';
  commentBtn.addEventListener('click', () => {
    getElement('#main').appendChild(popUp(item));
    getElement('#staticBackdrop').classList = 'displayModal show fade modal';
    getElement('#btnClose').addEventListener('click', () => {
      getElement('#staticBackdrop').classList = 'fade modal';
      getElement('#staticBackdrop').outerHTML = '';
    });
  });
  const [likeBtn, likeCount] = setLikeSpan(item.id);
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