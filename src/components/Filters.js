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
export default Filters;
