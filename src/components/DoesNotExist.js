import { Link } from 'react-router-dom';
import triste from '../images/triste.jpg';
import '../styles/DoesNotExist.scss';
const DoesNotExist = () => {
  return (
    <section className='sad'>
      <p className='sad__text'>¡¿¡¿No ves que lo que buscas no existe?!?!</p>
      <img src={triste} alt='Triste' />
      <Link to='/' className='sad__button'>
        Volver
      </Link>
    </section>
  );
};
export default DoesNotExist;
