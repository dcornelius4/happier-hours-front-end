import { connect } from 'react-redux';
import { signIn, signUp } from '../actions/authAction';
import Auth from '../components/auth/Auth';

const mapDispatchToProps = dispatch => ({
  onSignIn(signInUser, email, password) {
    dispatch(signIn(signInUser, email, password));
  },
  onSignUp(signUpUser, email, password) {
    dispatch(signUp(signUpUser, email, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Auth);
