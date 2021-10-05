const callToApi = () => {
  // Llamamos al API 'https://rickandmortyapi.com/api/character'
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
          id: character.id,
          origin: character.location.name,
          episodes: character.episode.length,
          status: character.status,
        };
      });
    });
};

export default callToApi;
