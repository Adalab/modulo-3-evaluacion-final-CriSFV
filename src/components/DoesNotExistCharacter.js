import triste from '../images/triste.jpg';
import '../styles/DoesNotExist.scss';

const DoesNotExistCharacter = () => {
  const handleClickReload = (ev) => {
    ev.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <section className='sad'>
        <p className='sad__text'>
          ¡¿¡¿No ves que el personaje que estás buscando no existe?!?!
        </p>

        <img src={triste} alt='Triste' />

        <button className='sad__button' onClick={handleClickReload}>
          Volver
        </button>
      </section>
    </>
  );
};
export default DoesNotExistCharacter;
