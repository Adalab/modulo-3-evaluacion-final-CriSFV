import '../styles/List.scss';
import FilterName from './FilterName';
import Cards from './Card';

const List = (props) => {
  const hanlePrevent = (ev) => {
    ev.preventDefault();
  };

  const printList = props.data.map((eachData) => {
    return (
      <li className='list__character' key={eachData.id}>
        <Cards eachData={eachData} />
      </li>
    );
  });

  // pintar lista si existe, si no está, comentario 'no existe'
  return (
    <>
      <section>
        <form className='filter' onSubmit={hanlePrevent}>
          <FilterName
            handleSearch={props.handleSearch}
            userSearch={props.userSearch}
          />
        </form>
      </section>
      <section>
        <ul className='list'>{printList}</ul>
      </section>
    </>
  );
};

export default List;
