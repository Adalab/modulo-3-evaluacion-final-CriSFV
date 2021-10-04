import '../styles/List.scss';
import FilterName from './FilterName';
import Cards from './Card';
import DoesNotExistCharacter from './DoesNotExistCharacter';
//import IsAlive from './FilterAlive';

const List = (props) => {
  const hanlePrevent = (ev) => {
    ev.preventDefault();
  };
  //if (props.data.length === 0 ? 'no existe' : { printList });
  console.log(props.data.length);

  const printList = () =>
    props.data.map((eachData) => {
      return (
        <li className='list__character' key={eachData.id}>
          <Cards eachData={eachData} />
        </li>
      );
    });
  if (props.data.length === 0) {
    return <DoesNotExistCharacter />;
  } else if (props.data.length > 0) {
    props.data.map((eachData) => {
      return printList();
    });
  }

  return (
    <>
      <section>
        <form className='filter' onSubmit={hanlePrevent}>
          <FilterName
            handleSearch={props.handleSearch}
            userSearch={props.userSearch}
          />
          {/* <IsAlive /> */}
        </form>
      </section>
      <section>
        <ul className='list'>{printList()}</ul>
      </section>
    </>
  );
};

export default List;
