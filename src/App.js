import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <PrivateRoute path="/details/:serviceId">
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
    </Switch>
  </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
