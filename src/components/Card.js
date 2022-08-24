import { useEffect, useState } from 'react';
import Loader from './small-components/Loader';
import './Card.css'

export default function Card(props) {
  return (
    <a className="card" href="#">
      <div className="card-body">
        {props.pokemonName}
      </div>
    </a>
  );
}
