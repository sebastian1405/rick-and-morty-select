const urlApi2 = `https://rickandmortyapi.com/api/character/`;

export const getOneCharacter = () =>
  fetch(urlApi2)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));
