import '../styles/Header.scss';
import logo from '../images/logo.png';
import InputSearch from './InputSearch';

const Header = (props) => {
  const hanlePrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <header className='header'>
      <img src={logo} alt='Rick and Morty' className='header__img' />
      <form onSubmit={hanlePrevent}>
        <InputSearch
          handleSearch={props.handleSearch}
          dataSearch={props.dataSearch}
        />
      </form>
    </header>
  );
};
export default Header;
