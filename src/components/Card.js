const Cards = (props) => {
  const handleCharacterClick = (ev) => {
    props.userClick(parseInt(ev.currentTarget.id));
  };
  return (
    <>
      <li
        className='list__character'
        onClick={handleCharacterClick}
        id={props.eachData.id}
      >
        <img
          className='list__character__img'
          src={props.eachData.photo}
          alt={props.eachData.name}
        />
        <h4 className='list__character__name'>{props.eachData.name}</h4>
        <p className='list__character__rest'>{props.eachData.species}</p>
      </li>
    </>
  );
};
export default Cards;
