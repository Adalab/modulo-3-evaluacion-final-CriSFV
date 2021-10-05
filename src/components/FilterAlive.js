const isAlive = (props) => {
  const optionValue = (ev) => {
    props.handleSearchStatus(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor='status'>Estado: </label>
      <select
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
    </>
  );
};
export default isAlive;
