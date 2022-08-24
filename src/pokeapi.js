const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

const getResource = async (resourceUrl) => {
  const response = await fetch(resourceUrl);
  if (!response.ok) {
    throw new Error('API Error');
  }

  return response.json();
};

const pokeapi = {
  searchPokemons: () =>
    getResource(`${BASE_URL}`),
  getPokemonById: (id) => getResource(`${BASE_URL}/${id}`),
};

export default pokeapi;