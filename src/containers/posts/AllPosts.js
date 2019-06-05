import { connect } from 'react-redux';
import { getPosts } from '../../selectors/postSelector';
import Posts from '../../components/posts/Posts';
import { updatePost } from '../../actions/postAction';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  updatePost(id) {
    dispatch(updatePost(id));
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Posts);
