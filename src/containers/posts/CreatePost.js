import { connect } from 'react-redux';
import { createPost } from '../../actions/postAction';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(search, times, specials) {
    dispatch(createPost(search, times, specials));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
