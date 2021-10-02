import '../styles/List.scss';
import Cards from './Card';

const List = (props) => {
  const printList = props.data.map((eachData, index) => {
    return (
      <Cards eachData={eachData} key={index} userClick={props.userClick} />
    );
  });

  return (
    <>
      <ul className='list'>{printList}</ul>
    </>
  );
};

export default List;
