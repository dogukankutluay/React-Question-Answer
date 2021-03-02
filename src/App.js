import Navi from "./components/Navi";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Questions from "./components/Questions";
function App() {
  return (
    <div>
      <Navi />
      <Switch>
        <Route  component={Questions} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
