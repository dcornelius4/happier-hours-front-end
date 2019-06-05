import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  const paras = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <section>
      <h1>{post.search}</h1>
      {paras}
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
