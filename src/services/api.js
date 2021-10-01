const callToApi = () => {
  // Llamamos al API
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results.map((character) => {
        return {
          name: character.name,
          photo: character.image,
          species: character.species,
        };
      });
    });
};

export default callToApi;
