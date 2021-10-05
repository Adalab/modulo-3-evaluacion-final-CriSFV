import '../styles/List.scss';
import PropTypes from 'prop-types';
import Cards from './Card';
import DoesNotExistCharacter from './DoesNotExistCharacter';
import Filters from './Filters';

const List = (props) => {
  const hanlePrevent = (ev) => {
    ev.preventDefault();
  };

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
          <Filters
            handleSearch={props.handleSearch}
            userSearch={props.userSearch}
            handleSearchStatus={props.handleSearchStatus}
            userSearchStatus={props.userSearchStatus}
          />
        </form>
      </section>
      <section>
        <ul className='list'>{printList()}</ul>
      </section>
    </>
  );
};
List.propTypes = {
  data: PropTypes.array,
  userSearch: PropTypes.string,
  userSearchStatus: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  handleSearchStatus: PropTypes.func.isRequired,
};
export default List;
