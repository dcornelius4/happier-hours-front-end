export const SIGN_IN = 'SIGN_IN';
export const signIn = (signInUser, email, password, button) => ({
  type: SIGN_IN,
  payload: { signInUser, email, password, button }
});

export const SIGN_UP = 'SIGN_UP';
export const signUp = (signUpUser, email, password, button) => ({
  type: SIGN_UP,
  payload: { signUpUser, email, password, button }
});
