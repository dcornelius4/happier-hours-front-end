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
        <input name="search" value={search} onChange={this.handleChange} />
        <input name="times" value={times} onChange={this.handleChange} />
        <input name="specials" value={specials} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

