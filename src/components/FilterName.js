import '../styles/Filter.scss';

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
          placeholder='busca aquí tu personaje'
          value={props.userSearch}
          onChange={inputValue}
        />
      </label>
    </>
  );
};
export default FilterName;
