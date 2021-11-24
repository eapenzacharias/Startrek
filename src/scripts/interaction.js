const appID = 'F7stpUzdG6g4vBIK95rU';
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

export { postLikes };