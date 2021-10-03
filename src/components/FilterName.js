import '../styles/Filter.scss';

const FilterName = (props) => {
  const inputValue = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };

  return (
    <input
      type='text'
      className='filter__input'
      placeholder='busca aquí tu personaje'
      value={props.userSearch}
      onChange={inputValue}
    />
  );
};
export default FilterName;
