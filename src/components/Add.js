import React from 'react';
import AllPosts from '../containers/posts/AllPosts';
import CreatePost from '../containers/posts/CreatePost';

export default function Add() {
  return (
    <>
    <h1>It is 5 oclock somewhere</h1>
    <section>
      <h2>Create Location</h2>
      <CreatePost />
    </section>
    <section>
      <AllPosts />
    </section>
    </>
  );
}
