import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Auth extends PureComponent {
  static propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  }

  state = {
    signInUser: '',
    signUpUser: '',
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { signIn, signUp, email, password } = this.state;
    this.props.onSignIn(signInUser, email, password);
    this.props.onSignUp(signUpUser, email, password);
    this.setState({ signIn: '', signUp: '', email: '', password: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { signInUser, signUpUser, email, password } = this.state;
    return (
      <div>
        <fieldset>
          <form onSignIn={this.handleSubmit} onSignUp={this.handleSubmit}>
            <input type="radio" name="signIn" value={signInUser} onChange={this.handleChange} checked/>
            <input type="radio" name="signUp" value={signUpUser} onChange={this.handleChange} />

            <label htmlFor="signIn">Sign in</label>
            <label htmlFor="signUp">Sign up</label>

            <input  type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
            <input  type="password" name="password" placeholder ="Password" value={password} onChange={this.handleChange} />
            <input  type="password" placeholder ="Repeat Password" value={password} onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </fieldset>
      </div>
    );
  }
}
