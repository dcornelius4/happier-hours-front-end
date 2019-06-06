import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.css';

export default class Auth extends PureComponent {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  }

  state = {
    signInUser: '',
    signUpUser: '',
    email: '',
    password: '',
    button: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { signInUser, signUpUser, email, password, button } = this.state;
    if(button === 'signInUser') {
      this.props.onSignIn(signInUser, email, password, button);
    } else {
      this.props.onSignUp(signUpUser, email, password, button);
    }
    this.setState({ signIn: '', signUp: '', email: '', password: '', button: '' });
    console.log('hi', this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log('hey', target);
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div className={styles.Form}>

          <form onSubmit={this.handleSubmit} >
            <input type="radio" name="button" value='signInUser' onChange={this.handleChange} id="sign-in" />
            <input type="radio" name="button" value='signUpUser' onChange={this.handleChange} id="sign-up" />

            <label htmlFor="sign-in">Sign in</label>
            <label htmlFor="sign-up">Sign up</label>

            <input  type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} className={styles.Input} />
            <input  type="password" name="password" id="password" placeholder ="Password" value={password} onChange={this.handleChange} className={styles.Input} />
            <button>Submit</button>
          </form>

      </div>
    );
  }
}
