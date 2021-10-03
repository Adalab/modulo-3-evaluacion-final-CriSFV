import '../styles/Header.scss';
import logo from '../images/logo.png';
import FilterName from './FilterName';

const Header = (props) => {
  // const hanlePrevent = (ev) => {
  //   ev.preventDefault();
  // };
  return (
    <header className='header'>
      <img src={logo} alt='Rick and Morty' className='header__img' />
      {/* <form onSubmit={hanlePrevent}>
        <FilterName
          handleSearch={props.handleSearch}
          userSearch={props.userSearch}
        />
      </form> */}
    </header>
  );
};
export default Header;
