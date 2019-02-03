// ------------------------------------
// Constants
const LOAD_CHARACTERS_REQUEST = "LOAD_CHARACTERS_REQUEST";
const LOAD_CHARACTERS_SUCCESS = "LOAD_CHARACTERS_SUCCESS";
const LOAD_CHARACTERS_FAIL = "LOAD_CHARACTERS_FAIL";

const SELECT_CHARACTER = "(Characters) SELECT_CHARACTER";

export {
  LOAD_CHARACTERS_REQUEST,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAIL,
  SELECT_CHARACTER
};

// ------------------------------------
// Actions
// ------------------------------------

const searchCharacters = (keyword) => ({
  type: LOAD_CHARACTERS_REQUEST,
  payload: keyword
});

const selectCharacter = (row) => ({
  type: SELECT_CHARACTER,
  payload: row
});

export const actions = {
  searchCharacters,
  selectCharacter
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_CHARACTERS_REQUEST]: (state, action) => ({
    ...state,
    charactersList: [],
    isLoadingCharacters: true,
    selectedRow: {},
    hasErrors: false,
    errorMessage: null
  }),
  [LOAD_CHARACTERS_SUCCESS]: (state, action) => ({
    ...state,
    charactersList: action.payload,
    isLoadingCharacters: false,
    selectedRow: {}
  }),
  [LOAD_CHARACTERS_FAIL]: (state, action) => ({
    ...state,
    charactersList: [],
    isLoadingCharacters: false,
    hasErrors: true,
    errorMessage: action.payload
  }),
  [SELECT_CHARACTER]: (state, action) => ({
    ...state,
    selectedRow: action.payload
  }),
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
