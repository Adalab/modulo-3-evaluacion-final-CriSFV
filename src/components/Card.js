import { Link } from 'react-router-dom';
const Cards = (props) => {
  return (
    <>
      <Link to={`/card/${props.eachData.id}`} className='character'>
        <img
          className='list__character__img'
          src={props.eachData.photo}
          alt={props.eachData.name}
        />
        <h4 className='list__character__name '>{props.eachData.name}</h4>
        <p className='list__character__rest '>{props.eachData.species}</p>
      </Link>
    </>
  );
};
export default Cards;
