import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.search}</h1>
      <p>{post.times}</p>
      <p>{post.specials}</p>
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
