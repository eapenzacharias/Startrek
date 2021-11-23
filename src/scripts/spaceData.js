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

const ships = async () => {
  let shipsData = '';
  await fetch(`${url}ships`)
    .then((res) => res.json())
    .then((data) => {
      shipsData = data;
      window.sessionStorage.setItem('shipsData', JSON.stringify(shipsData));
    });
  return shipsData;
};

export { rockets, ships };