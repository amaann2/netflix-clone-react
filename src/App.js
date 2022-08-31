import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
