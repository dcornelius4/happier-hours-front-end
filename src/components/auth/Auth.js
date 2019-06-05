import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Auth extends PureComponent {
  static proptypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    signIn: '',
    signUp: '',
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { signIn, signUp, email, password } = this.state;
    this.props.onSubmit(signIn, signUp, email, password);
    this.setState({ signIn: '', signUp: '', email: '', password: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { signIn, signUp, email, password } = this.state;
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <input type="radio" name="signIn" value={signIn} onChange={this.handleChange} checked/>
            <input type="radio" name="signUp" value={signUp} onChange={this.handleChange} />

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
