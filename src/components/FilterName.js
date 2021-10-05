import '../styles/Filter.scss';
import PropTypes from 'prop-types';

const FilterName = (props) => {
  const inputValue = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };

  return (
    <>
      <label>
        <input
          type='text'
          className='filter__input'
          placeholder='Busca aquí tu personaje'
          value={props.userSearch}
          onChange={inputValue}
        />
      </label>
    </>
  );
};
FilterName.propTypes = {
  userSearch: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};
export default FilterName;
