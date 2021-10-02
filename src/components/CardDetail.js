import '../styles/Card.scss';
const CardDetail = (props) => {
  console.log(props.data.photo);
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
            <li className='card__detail__status'>
              Estado: {props.data.status}{' '}
            </li>
            <li className='card__detail__origin'>
              Origen: {props.data.origin}
            </li>
            <li className='card__detail__episodes'>
              Episodios: {props.data.episodes}{' '}
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default CardDetail;
