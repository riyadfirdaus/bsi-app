const initialState = { count: 0, notes: [] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "MULTIPLY":
      return { ...state, count: state.count * 2 };
    case "DIVIDE":
      return { ...state, count: state.count / 2 };
    case "RESET":
      return { ...state, count: 0 };
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, payload] };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note, index) =>
          index === payload.index ? payload.newText : note
        ),
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note, index) => index !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
