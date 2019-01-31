// ------------------------------------
// Constants
const LOAD_CHARACTERS = "LOAD_CHARACTERS";

// ------------------------------------
// Actions
// ------------------------------------

const loadCharacters = () => ({
  type: LOAD_CHARACTERS,
  payload: [
    { id: 1, name: "Rick", status: Math.random() * 10 },
    { id: 2, name: "Morty", status: Math.random() * 10 }
  ]
});

export const actions = {
  loadCharacters
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_CHARACTERS]: (state, action) => ({
    ...state,
    charactersList: action.payload
  })
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
