import { Link } from 'react-router-dom';
import '../styles/CardDetail.scss';
import DoesNotExist from './DoesNotExist';

const CardDetail = (props) => {
  const wichtSpecie = () => {
    if (props.data.species === 'Human') {
      return <i className='fas fa-baby'></i>;
    } else if (props.data.species === 'Alien') {
      return <i className='fab fa-reddit-alien'></i>;
    }
  };

  const isAlive = () => {
    if (props.data.status === 'Dead') {
      return <i className='fas fa-skull-crossbones'></i>;
    }
  };

  if (props.data === undefined) {
    return <DoesNotExist />;
  }
  return (
    <>
      <div className='div'>
        <section className='card'>
          <img
            className='list__character__img'
            src={props.data.photo}
            alt={props.data.name}
          ></img>
          <article className='card__article'>
            <h3 className='card__title'>{props.data.name}</h3>
            <ul className='card__detail'>
              <li>Origen: {props.data.origin}</li>
              <li>{props.data.species}</li>
              <li>Episodios: {props.data.episodes}</li>
              <li className='CardClose'>
                <Link to='/' className='CardClose__link'>
                  Volver
                </Link>
              </li>
            </ul>
          </article>
          <article className='card__icons'>
            <aside className='card__icon'>{wichtSpecie()}</aside>
            <aside className='card__icon'>{isAlive()}</aside>
          </article>
        </section>
      </div>
    </>
  );
};
export default CardDetail;
