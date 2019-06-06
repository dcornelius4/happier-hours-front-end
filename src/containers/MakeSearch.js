import { connect } from 'react-redux';
import { makeSearch } from '../actions/searchAction';
import Search from '../components/search/Search';

const mapDispatchToProps = dispatch => ({
  onSubmit(search, filter) {
    dispatch(makeSearch(search, filter));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
