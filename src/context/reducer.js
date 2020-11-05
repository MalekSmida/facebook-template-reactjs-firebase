// initialize user
export const initialState = {
  user: null,
};

// actions
export const actionTypes = {
  SET_USER: "SET_USER",
};

// reducer
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
