import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/authAction';
import Auth from '../components/auth/Auth';

const mapDispatchToProps = dispatch => ({
  onSignIn(signInUser, email, password, button) {
    dispatch(signIn(signInUser, email, password, button));
  },
  onSignUp(signUpUser, email, password, button) {
    dispatch(signUp(signUpUser, email, password, button));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Auth);
