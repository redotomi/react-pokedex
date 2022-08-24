const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const pokeapi = {
  searchPokemons: () =>
    getResource(`${BASE_URL}?limit=100000&offset=0`),
  getPokemonByName: (name) => getResource(`${BASE_URL}/${name}`),
};

export default pokeapi;