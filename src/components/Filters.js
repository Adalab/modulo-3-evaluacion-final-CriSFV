import FilterName from './FilterName';
import IsAlive from './FilterAlive';

const Filters = (props) => {
  return (
    <>
      <FilterName
        handleSearch={props.handleSearch}
        userSearch={props.userSearch}
      />
      <IsAlive
        handleSearchStatus={props.handleSearchStatus}
        userSearchStatus={props.userSearchStatus}
      />
    </>
  );
};
export default Filters;
