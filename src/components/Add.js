import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import styles from './Add.css';

export default function Add() {
  return (
    <>
    <section className={styles.Animation}>
      <div>It</div>
      <div>is 5 oclock somewhere</div>
    </section>
      <section className={styles.Section}>
        <h2>Create Location</h2>
        <CreatePost />
      </section>
    </>
  );
}
