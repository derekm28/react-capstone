import './App.css';
import HomePage from './HomePage';
import NavBar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchForm from './SearchForm';
import NikePage from './NikePage';
import JordanPage from './JordanPage';
import YeezyPage from './YeezyPage';
import SignUpPage from './SignUpPage';
import LogIn from './LogInPage';
import PrivateRoute from './PrivateRoute';
import ProfileForm from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App({ login, signup }) {
  console.debug(
    'App',
    `login=${typeof login}`,
    `register=${typeof register}`
  );
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Route exact path='/'>
            <SearchForm />
            <HomePage />
          </Route>
          <Route exact path='/nike'>
            <NikePage />
          </Route>
          <Route exact path='/jordan'>
            <JordanPage />
          </Route>
          <Route exact path='/yeezy'>
            <YeezyPage />
          </Route>
          <Route exact path='/signup'>
            <SignUpPage signup={signup} />
          </Route>
          <Route exact path='/login'>
            <LogIn login={login} />
          </Route>
          <PrivateRoute exact path="/profile">
            <ProfileForm />
          </PrivateRoute>
        </BrowserRouter>
    </div>
  );
}

export default App;
