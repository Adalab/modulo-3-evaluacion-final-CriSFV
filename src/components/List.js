import '../styles/List.scss';
import PropTypes from 'prop-types';
import Cards from './Card';
import DoesNotExistCharacter from './DoesNotExistCharacter';

const List = (props) => {
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
  }

  return (
    <>
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
