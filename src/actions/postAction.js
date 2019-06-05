export const CREATE_POST = 'CREATE_POST';
export const createPost = (search, times, specials) => ({
  type: CREATE_POST,
  payload: { search, times, specials }
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (id, times, specials) => ({
  type: UPDATE_POST,
  payload: { id, times, specials }
});
