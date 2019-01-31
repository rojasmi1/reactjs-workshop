// ------------------------------------
// Constants
const LOAD_CHARACTERS_REQUEST = "LOAD_CHARACTERS_REQUEST";
const LOAD_CHARACTERS_SUCCESS = "LOAD_CHARACTERS_SUCCESS";
const LOAD_CHARACTERS_FAIL = "LOAD_CHARACTERS_FAIL";

export {
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAIL
};

// ------------------------------------
// Actions
// ------------------------------------

const loadCharacters = () => ({
  type: LOAD_CHARACTERS_REQUEST
});

export const actions = {
  loadCharacters
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_CHARACTERS_REQUEST]: (state, action) => ({
    ...state,
    charactersList: [],
    isLoadingCharacters: true
  }),
  [LOAD_CHARACTERS_SUCCESS]: (state, action) => ({
    ...state,
    charactersList: action.payload,
    isLoadingCharacters: false
  })
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
