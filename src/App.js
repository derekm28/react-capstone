import './App.css';
import HomePage from './HomePage';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import ApiRequest from './Api';
import SearchForm from './SearchForm';
import NikePage from './NikePage';
import JordanPage from './JordanPage';
import AdidasPage from './AdidasPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path = '/'>
        <HomePage />
        <ApiRequest />
        <SearchForm />
        </Route>
        <Route exact path = '/nike'>
          <NikePage />
        </Route>
        <Route exact path = '/jordan'>
          <JordanPage />
        </Route>
        <Route exact path = '/adidas'>
          <AdidasPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
