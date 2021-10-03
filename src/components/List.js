import '../styles/List.scss';
import FilterName from './FilterName';
import Cards from './Card';

const List = (props) => {
  const printList = props.data.map((eachData) => {
    return (
      <li className='list__character' key={eachData.id}>
        <Cards eachData={eachData} />
      </li>
    );
  });
  const hanlePrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className='filter' onSubmit={hanlePrevent}>
        <FilterName
          handleSearch={props.handleSearch}
          userSearch={props.userSearch}
        />
      </form>
      <ul className='list'>{printList}</ul>
    </>
  );
};

export default List;
