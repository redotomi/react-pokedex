// import Card from "./Card";
import Card from './Card'
import pokeapi from "../pokeapi";
import Loader from "./small-components/Loader";
import { useFetchReducer } from "../hooks/useFetch";
import './CardsContainer.css'
import addCaps from '../addCaps';

export default function CardsContainer() {
  const { data, error, loading } = useFetchReducer(pokeapi.searchPokemons);


  return (
    <>
      <div>
        {loading && <Loader />}
      </div>
      <div className="cards-container">
        {
          data && data.results.map((pokemon) => (
            <Card
              pokemonName={pokemon.name}
              key={pokemon.url}
            />
          ))

        }
      </div>
      {error && <div>{error}</div>}
    </>
  );
}
