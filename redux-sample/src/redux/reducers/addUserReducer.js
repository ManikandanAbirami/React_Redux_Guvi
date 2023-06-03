const initialState = { name: "Guvi", age: 10 };

const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEUSERNAME": {
      return { ...state, name: action.payload };
    }
    case "CHANGEAGE": {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};

export default addUserReducer;
