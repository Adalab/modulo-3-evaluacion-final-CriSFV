import '../styles/Header.scss';
import logo from '../images/RyM.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Rick and Morty' className='header__img' />
      <input
        type='text'
        className='header__input'
        placeholder='busca aquí tu personaje'
      />
    </header>
  );
};
export default Header;
