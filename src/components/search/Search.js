import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AllPosts from '../../containers/posts/AllPosts';
import styles from './Search.css';

export default class Search extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    search: '',
    filter: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { search, filter } = this.state;
    this.props.onSubmit(search,  filter);
    this.setState({ search: '', filter: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { search, filter, favorites, popular, happeningNow, surpriseMe, nearMe } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.Form}>
          <input name="search" placeholder="Find a Bar" value={search} onChange={this.handleChange} />
          <select name="filter" value={filter} onChange={this.handleChange}>
            <option>--Please Choose a filter--</option>
            <option name="popular" value={popular}>Popular</option>
            <option name="happeningNow" value={happeningNow}>Happening Now</option>
            <option name="nearMe" value={nearMe}>Near Me</option>
            <option name="surpriseMe" value={surpriseMe}>Surprise Me</option>
            <option name="favorites" value={favorites}>Favorites</option>
          </select>
          <button>Submit</button>
        </form>
        <section>
          <AllPosts />
        </section>
      </>
    );
  }
}
