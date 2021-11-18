//https://rickandmortyapi.com/api/character
//https://rickandmortyapi.com/api/character/?page=${pageNumber}

const CallToApi = () => {
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

const BringInfo = () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.info.count,
        pages: data.info.pages,
        next: data.info.next,
        prev: data.info.prev,
      };
    });
};

const pages = (pageNumber) => {
  if (pageNumber !== null) {
    return fetch(
      `https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json?page=${pageNumber}`
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
  }
};

const CallToApis = {
  CallToApi: CallToApi,
  pages: pages,
  BringInfo: BringInfo,
};
export default CallToApis;
