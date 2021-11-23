const url = 'https://api.spacexdata.com/v4/';

const rockets = async () => {
  let rocketsData = '';
  await fetch(`${url}rockets`)
    .then((res) => res.json())
    .then((data) => {
      rocketsData = data;
      window.sessionStorage.setItem('rocketsData', JSON.stringify(rocketsData));
    });
  return rocketsData;
};

const dragons = async () => {
  let dragonsData = '';
  await fetch(`${url}dragons`)
    .then((res) => res.json())
    .then((data) => {
      dragonsData = data;
      window.sessionStorage.setItem('dragonsData', JSON.stringify(dragonsData));
    });
  return dragonsData;
};

export { rockets, dragons };