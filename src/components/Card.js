const Cards = (props) => {
  return (
    <>
      <img
        className='list__character__img'
        src={props.photo}
        alt={props.name}
      />
      <h4 className='list__character__name'>{props.name}</h4>
      <p className='list__character__rest'>{props.species}</p>
    </>
  );
};
export default Cards;
