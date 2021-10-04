import triste from '../images/triste.jpg';

const DoesNotExistCharacter = () => {
  const handleClickReload = (ev) => {
    ev.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <h4 className='list__character__name '>Ohh el personaje no existe</h4>
      <ul>
        <li>
          <img src={triste} alt='Triste' />
        </li>
        <li className=''>
          <button className='' onClick={handleClickReload}>
            Volver
          </button>
        </li>
      </ul>
    </>
  );
};
export default DoesNotExistCharacter;
