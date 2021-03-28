import './App.css';
import HomePage from './HomePage';
import NavBar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ApiRequest from './Api';
import SearchForm from './SearchForm';
import NikePage from './NikePage';
import JordanPage from './JordanPage';
import YeezyPage from './YeezyPage';
import SignUpPage from './SignUpPage';
import LogIn from './LogInPage';
import PrivateRoute from './PrivateRoute';
import ProfileForm from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path = '/'>
        <SearchForm />
        <HomePage />
        </Route>
        <Route exact path = '/nike'>
          <NikePage />
        </Route>
        <Route exact path = '/jordan'>
          <JordanPage />
        </Route>
        <Route exact path = '/yeezy'>
          <YeezyPage />
        </Route>
        <Route exact path = '/signup'>
          <SignUpPage />
        </Route>
        <Route exact path = '/login'>
          <LogIn />
        </Route>
        <PrivateRoute exact path="/profile">
          <ProfileForm />
        </PrivateRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
