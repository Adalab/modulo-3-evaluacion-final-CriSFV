const CallToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
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

export default CallToApi;
