export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const multiply = () => {
  return {
    type: "MULTIPLY",
  };
};

export const divide = () => {
  return { type: "DIVIDE" };
};

export const reset = () => {
  return { type: "RESET" };
};

export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const editNote = (index, newText) => {
  return {
    type: "EDIT_NOTE",
    payload: { index, newText },
  };
};

export const removeNote = (index) => {
  return {
    type: "REMOVE_NOTE",
    payload: index,
  };
};
