const callToApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  ) //cambiar api a la buena
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response.results.map((each) => {
        return {
          photo: each.image,
          name: each.name,
          species: each.species,
          status: each.status,
        };
      });
    });
};
export default callToApi;
