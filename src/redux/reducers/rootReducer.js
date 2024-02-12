const initialState = { count: 0 };

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
    default:
      return state;
  }
};

export default rootReducer;
