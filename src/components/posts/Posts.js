import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import styles from './Posts.css';

function Posts({ posts, updatePost }) {
  const postList = posts.map(post => (
    <li key={post.id}>
      <Post updatePost={updatePost} post={post} />
    </li>
  ));

  return (
    <ul className={styles.List}>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  updatePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default Posts;
