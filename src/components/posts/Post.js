import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, updatePost }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </>
  );
}

Post.propTypes = {
  updatePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

export default Post;
