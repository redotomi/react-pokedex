import logoImg from '../../img/logo.png'
import './Logo.css'

export default function Logo() {
  return (
    <a href='#'>
      <img className='logo' src={logoImg} alt='Pokedex Logo' />
    </a>
  );
}
