const InputSearch = (props) => {
  const inputValue = (ev) => {
    props.handleSearch(ev.target.value);
  };

  return (
    <input
      type='text'
      className='header__input'
      placeholder='busca aquí tu personaje'
      value={props.dataSearch}
      onChange={inputValue}
    />
  );
};
export default InputSearch;
