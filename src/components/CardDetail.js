import { Link } from 'react-router-dom';
import '../styles/Card.scss';

const CardDetail = (props) => {
  const isAlive = () => {
    if (props.data.status === 'Dead') {
      return "I'm dead";
    } else {
      return "I'm alive";
    }
  };
  const dontExist = 'No existe';
  if (props.data === undefined) {
    return dontExist;
    // con un route?. PropsData no me devuelve undefinde, me devuelve []. Si pongo []
  }
  return (
    <>
      <section className='card'>
        <img
          className='list__character__img'
          src={props.data.photo}
          alt={props.data.name}
        ></img>
        <article className='card__article'>
          <h3 className='card__title'>{props.data.name}</h3>
          <ul className='card__detail'>
            <li className='card__detail__status'>Estado: {isAlive()}</li>
            <li className='card__detail__origin'>
              Origen: {props.data.origin}
            </li>
            <li className='card__detail__episodes'>
              Episodios: {props.data.episodes}{' '}
            </li>
            <li className='CardClose'>
              <Link to='/' className='CardClose__link'>
                Volver
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default CardDetail;
