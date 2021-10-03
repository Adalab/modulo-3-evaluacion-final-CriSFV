import triste from '../images/triste.jpg';
import '../styles/DoesNotExist.scss';
const DoesNotExist = () => {
  return (
    <section className='sad'>
      <p className='sad__text'>
        ¡¿¡¿No ves que la página que estás buscando no existe?!?!
      </p>
      <img src={triste} alt='Triste' />
      {/* <p className='sad__face'>:(</p> */}
    </section>
  );
};
export default DoesNotExist;
