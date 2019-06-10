import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './PostForm.css';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    search: '',
    times: '',
    specials: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { search, times, specials } = this.state;
    this.props.onSubmit(search, times, specials);
    this.setState({ search: '', times: '', specials: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { search, times, specials } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <input name="search" placeholder="Search For a Bar" value={search} onChange={this.handleChange} />
        <input name="times" placeholder="Happy Hour Times" value={times} onChange={this.handleChange} />
        <input name="specials" placeholder="Enter Some Specials" value={specials} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

