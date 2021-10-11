import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Register from './components/Register/Register';
import Reset from './components/Reset/Reset';
import User from './components/User/User';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={User}/>
        <Route component={PaginaNoEncontrada} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
