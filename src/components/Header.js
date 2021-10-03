import '../styles/Header.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Rick and Morty' className='header__img' />
    </header>
  );
};
export default Header;
