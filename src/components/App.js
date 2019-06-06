import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PostId from '../containers/posts/PostId';
import AuthForm from '../containers/AuthForm';
import Add from './Add';
import Search from '../containers/MakeSearch';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthForm} />
        <Route exact path="/add" component={Add} />
        <Route path="/posts/:id" component={PostId} />
        <Route path="/" component={Search} />
      </Switch>
    </Router>
  );
}
