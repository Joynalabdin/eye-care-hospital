import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <Switch>
      <Route path="/home">
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
