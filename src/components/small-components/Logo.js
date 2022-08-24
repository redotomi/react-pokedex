import { NavLink } from 'react-router-dom';
import logoImg from '../../img/logo.png'
import './Logo.css'

export default function Logo() {
  return (
    <NavLink to='/'>
      <img className='logo' src={logoImg} alt='Pokedex Logo' />
    </NavLink>
  );
}
