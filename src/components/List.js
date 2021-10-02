import '../styles/List.scss';

const List = (props) => {
  const printList = props.data.map((eachData, index) => {
    return (
      <li className='list__character' key={index} id={eachData.id}>
        <img
          className='list__character__img'
          src={eachData.photo}
          alt={eachData.name}
        />
        <h4 className='list__character__name'>{eachData.name}</h4>
        <p className='list__character__rest'>{eachData.species}</p>
      </li>
    );
  });

  return (
    <>
      <ul className='list'>{printList}</ul>;
    </>
  );
};

export default List;
