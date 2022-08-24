import { NavLink } from 'react-router-dom';
import addCaps from '../addCaps';
import './Card.css'

export default function Card(props) {
  return (
    <NavLink className="card" to={`/${props.pokemonName}`}>
      <div className="card-body">
        {addCaps(props.pokemonName)}
      </div>
    </NavLink>
  );
}
