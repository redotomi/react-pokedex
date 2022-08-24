import './SearchPokemon.css'
import pokeapi from '../pokeapi';
import { useFetchReducerSearch } from "../hooks/useFetch";
import Loader from './small-components/Loader';
import Card from './Card';
import addCaps from '../addCaps';
import { useState } from 'react';

export default function SearchPokemon() {
  const [pokemonName, setPokemonName] = useState('')
  const { data, error, loading } = useFetchReducerSearch(pokeapi.getPokemonByName, pokemonName, 700);

  return (
    <>
      <form className='search-form'>
        <div className="textInputWrapper">
          <input
            placeholder="Search a Pokémon!"
            type="text"
            className="textInput"
            onSubmit={ev => { ev.preventDefault() }}
            onChange={(ev) => { setPokemonName(ev.target.value) }}
            value={pokemonName}
          />
        </div>
      </form>
      {
        data && data.count ?
          <div></div> :
          data ?
            <div>
              <h3>Searched Pokémon</h3>
              <div>
                {loading && <Loader />}
              </div>
              <div className="cards-container">
                {
                  data &&
                  <Card
                    pokemonName={addCaps(data.species.name)}
                  />
                }
              </div>
              {error && <div>{error}</div>}
              <hr />
            </div> :
            <div>
              <h4>Pokemon not found :(</h4>
              <hr />
            </div>


      }
      <h3>All Pokémon</h3>
    </>
  );
}