import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
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
      <Router>
        <Logo />
        <Switch>
          <Route path='/' exact>
            <SearchPokemon />
            <CardsContainer />
          </Route>
          <Route path='/:name'>
            <Pokemon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
