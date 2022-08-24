// import { BrowserRouter as Router, Switch, Route, NavLink, Routes } from 'react-router-dom';
import SearchPokemon from './components/SearchPokemon';
import Pokemon from './components/Pokemon';
import Logo from './components/small-components/Logo';
import CardsContainer from './components/CardsContainer';
import './App.css';

function App() {
  return (
    <div>
      {/* <header>a</header>
      <button></button>
      <button></button> */}
      <Logo />
      <SearchPokemon />
      <CardsContainer />
      {/* <Pokemon /> */}
    </div>
  );
}

export default App;
