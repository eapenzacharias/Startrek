const appID = 'j16hQlfOqes4CaGLmngc';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const postLikes = async (itemID) => {
  await fetch(`${url}${appID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getLikes = async () => {
  let likesData;
  await fetch(`${url}${appID}/likes`)
    .then((res) => res.json())
    .then((data) => {
      likesData = data;
      window.sessionStorage.setItem('likesData', JSON.stringify(likesData));
      return likesData;
    });
};

const likesCounter = (likesData, index) => {
  likesData[index].likes += 1;
  const count = likesData[index].likes;
  window.sessionStorage.setItem('likesData', JSON.stringify(likesData));
  return count;
};

export { postLikes, getLikes, likesCounter };