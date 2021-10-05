import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterIsAlive from './FilterAlive';

const Filters = (props) => {
  return (
    <>
      <FilterName
        handleSearch={props.handleSearch}
        userSearch={props.userSearch}
      />
      <FilterIsAlive
        handleSearchStatus={props.handleSearchStatus}
        userSearchStatus={props.userSearchStatus}
      />
    </>
  );
};
Filters.propTypes = {
  userSearch: PropTypes.string,
  userSearchStatus: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  handleSearchStatus: PropTypes.func.isRequired,
};
export default Filters;
