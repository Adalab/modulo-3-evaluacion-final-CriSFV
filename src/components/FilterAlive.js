import '../styles/Filter.scss';
import PropTypes from 'prop-types';

const FilterisAlive = (props) => {
  const optionValue = (ev) => {
    props.handleSearchStatus(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor='status' className='filter__status'>
        Estado:{' '}
        <select
          className='filter__status__select'
          name='status'
          id='status'
          value={props.userSearchStatus}
          onChange={optionValue}
        >
          <option value='all'>Todos</option>
          <option value='Alive'>Vivos</option>
          <option value='Dead'>Muertos</option>
          <option value='unknown'>No se sabe</option>
        </select>
      </label>
    </>
  );
};
FilterisAlive.propTypes = {
  userSearchStatus: PropTypes.string,
  handleSearchStatus: PropTypes.func.isRequired,
};
export default FilterisAlive;
