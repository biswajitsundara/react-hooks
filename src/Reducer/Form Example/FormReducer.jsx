export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: "",
  category: "",
  quantity: 0,
  tags: [],
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};