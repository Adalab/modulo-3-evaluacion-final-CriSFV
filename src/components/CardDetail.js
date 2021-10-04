import { Link } from 'react-router-dom';
import '../styles/Card.scss';
import DoesNotExist from './DoesNotExist';

const CardDetail = (props) => {
  const isAlive = () => {
    if (props.data.status === 'Dead') {
      return <i class='fas fa-skull-crossbones'></i>;
    } else if (props.data.status === 'unknown') {
      return <i class='far fa-question-circle'></i>;
    } else if (props.data.status === 'Alive') {
      return <i class='far fa-smile-wink'></i>;
    }
  };

  const wichtSpecie = () => {
    if (props.data.species === 'Human') {
      return <i class='fas fa-baby'></i>;
    } else if (props.data.species === 'Alien') {
      return <i class='fab fa-reddit-alien'></i>;
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
              <li className='card__detail__origin'>
                Origen: {props.data.origin}
              </li>
              <li className='card__detail__episodes'>
                Episodios: {props.data.episodes}
              </li>
              <li className='CardClose'>
                <Link to='/' className='CardClose__link'>
                  Volver
                </Link>
              </li>
            </ul>
          </article>
          <article className='card__icons'>
            <aside className='card__icon'>{isAlive()}</aside>
            <aside className='card__icon'>{wichtSpecie()}</aside>
          </article>
        </section>
      </div>
    </>
  );
};
export default CardDetail;
