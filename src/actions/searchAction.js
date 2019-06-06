export const MAKE_SEARCH = 'MAKE_SEARCH';
export const makeSearch = (search, filter) => ({
  type: MAKE_SEARCH,
  payload: { search, filter }
});
