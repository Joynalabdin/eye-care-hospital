import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route path="/services">
       
      </Route>
    </Switch>
    
  </Router>
    </div>
  );
}

export default App;
