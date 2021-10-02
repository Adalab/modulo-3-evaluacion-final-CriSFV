import '../styles/List.scss';
import Cards from './Card';

const List = (props) => {
  const printList = props.data.map((eachData) => {
    return (
      <li className='list__character' key={eachData.id}>
        <Cards eachData={eachData} />
      </li>
    );
  });

  return (
    <>
      <ul className='list'>{printList}</ul>
    </>
  );
};

export default List;
