import '../styles/List.scss';
import Cards from './Card';

const List = (props) => {
  const printList = props.data.map((eachData, index) => {
    return (
      <li className='list__character' key={index} id={eachData.id}>
        <Cards
          photo={eachData.photo}
          name={eachData.name}
          species={eachData.species}
        />
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
