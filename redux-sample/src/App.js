import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { changeUserName } from "./redux/actions/changeUserName";
import { changeUserAge } from "./redux/actions/changeUserAge";

function App() {
  const user = useSelector((state) => state.addUserReducer);

  return (
    <div className="App">
      <h1>Name: {user.name} </h1>
      <h2>Age: {user.age}</h2>
      <form>
        <input placeholder="Change name"></input>
        <input placeholder="Change age"></input>
        <input type="submit" value="Change user"></input>
      </form>
    </div>
  );
}

export default App;
