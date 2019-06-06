import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PostId from '../containers/posts/PostId';
import AuthForm from '../containers/AuthForm';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/auth" component={AuthForm} />
        <Route path="/posts/:id" component={PostId} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
