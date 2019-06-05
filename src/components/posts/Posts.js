import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, updatePost }) {
  const postList = posts.map(post => (
    <li key={post.id}>
      <Post updatePost={updatePost} post={post} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  updatePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default Posts;
