const initialState = { name: "Manikandan Anbalagan", age: 32 };

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
