import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Register from './components/Register/Register';
import User from './components/User/User';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'reactstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users" component={User} />
          <Route component={PaginaNoEncontrada} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
