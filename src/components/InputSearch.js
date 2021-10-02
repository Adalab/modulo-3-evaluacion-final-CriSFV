const InputSearch = (props) => {
  const inputValue = (ev) => {
    props.handleSearch(ev.currentTarget.value);
  };

  return (
    <input
      type='text'
      className='header__input'
      placeholder='busca aquí tu personaje'
      value={props.userSearch}
      onChange={inputValue}
    />
  );
};
export default InputSearch;
