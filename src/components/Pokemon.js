import { useParams } from "react-router-dom";
import pokeapi from '../pokeapi'
import { useFetchReducer } from "../hooks/useFetch";
import Loader from "./small-components/Loader";
import addCaps from "../addCaps";
import addComma from "../addComma";
import './Pokemon.css'

export default function Pokemon() {
  const { name } = useParams();
  const { data, error, loading } = useFetchReducer(pokeapi.getPokemonByName, name);
  console.log(data)

  if (loading) return <Loader />

  if (error) return 'An error just occurred'

  if (data) return (
    <div className="pokemon">
      <div className="pokemon-image">
        <img className="pokemon-sprite" src={data.sprites.front_default} alt='The Sprite of the Pokemon' />
        {data.types.map((type) => (
          <span className={`type ${type.type.name}`} key={type.type.name}>{addCaps(type.type.name)}</span>
        ))}
      </div>
      <div className="pokemon-info">
        <h1>{addCaps(data.name)}</h1>
        <div className="pokemon-stats">
          <div>Weight: {addComma(data.weight)}</div>
          <div>Height: {addComma(data.height)}</div>
        </div>
        <div className="pokemon-abilities">
          <h3>Abilities</h3>
          <ul >
            {data.abilities.map((ability) => (
              <li key={ability.ability.name}>{addCaps(ability.ability.name)}</li>
            ))}
          </ul>
        </div>
        {/* <h3 className="pokemon-id-title">ID:</h3> */}
        <div className="pokemon-id">#{data.id}</div>
      </div>
    </div>
  );
}