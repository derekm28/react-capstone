import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt from 'jsonwebtoken';
import Capstone2Api from './Api'
import useLocalStorage from './useLocalStorage';
import LoadingSpinner from './LoadingSpinner';
import UserContext from './UserContext';
import Routes from './Routes';

//Key name for storing token in localstorage for 'remember me' re login
export const TOKEN_STORAGE_ID = 'capstone2-token';

/**Capstone2 application
 *
 * infoLoaded: has user data been pulled from api
 * (this manages spinner for loading...)
 *
 * currentUser: user obj from api. this becomes the canonical way to tell if someone is logged in. This is passed around via context throughout the app.
 *
 * token: for logged in users, this is their authentication JWT.
 *
 * is required to be set for most api calls. this is initially read from local storage and synced to there via the useLocalStorage hook
 *
 * App->Routes
 */


function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [sneakerIds, setSneakerIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
    'App',
    'infoLoaded=', infoLoaded,
    'currentUser=', currentUser,
    'token=', token,
  );

  useEffect(function loadUserInfo() {
    console.debug('App useEffect loadUserInfo', 'token=', token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          //put the token on the api class so it can use it to call the api
          Capstone2Api.token = token;
          let currentUser = await Capstone2Api.getCurrentUser(username);
          setCurrentUser(currentUser);
          setSneakerIds(new Set(currentUser.sneakers));
        }
        catch (err) {
          console.error('App loadUserInfo: problem loading', err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    //set infoLoaded to false while async getCurrentUser runs; once the data is fetched (or even if an error happens), this will be set back to false to control the spinner

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  //Handles site-wide logout
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  //Handles site-wide signup
  //Automatically logs them in (set token) upon signup
  //Make sure you await this function and check its return value

  async function signup(signupData) {
    try {
      let token = await Capstone2Api.signup(signupData);
      setToken(token);
      return { success: true };
    }
    catch (errors) {
      console.error('signup failed', errors);
      return { success: false, errors };
    }
  }

  //Handles site-wide login
  //Make sure you await this function and check its return value

  async function login(loginData) {
    try {
      let token = await Capstone2Api.login(loginData);
      setToken(token);
      return { success: true };
    }
    catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  //Checks if a sneaker has been saved previously
  function hasSavedSneaker(id) {
    return sneakerIds.has(id);
  }

  //Save a sneaker: make API call and update set of application IDs
  function saveSneaker(id) {
    if (hasSavedSneaker(id)) return;
    Capstone2Api.applyToJob(currentUser.username, id);
    setSneakerIds(new Set([...sneakerIds, id]));
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasSavedSneaker, saveSneaker }}>
        <div className="App">
        <NavBar logout={logout} />
        <Routes login={login} signup={signup} />
          </div>
      </UserContext.Provider>
    </BrowserRouter >



    );

}

export default App;
