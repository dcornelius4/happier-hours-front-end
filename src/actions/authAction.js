export const SIGN_IN = 'SIGN_IN';
export const signIn = (signIn, email, password) => ({
  type: SIGN_IN,
  payload: { signIn, email, password }
});

export const SIGN_UP = 'SIGN_UP';
export const signUp = (signUp, email, password) => ({
  type: SIGN_UP,
  payload: { signUp, email, password }
});
