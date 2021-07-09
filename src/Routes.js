import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogIn from './LogInPage';
import SignUpPage from './SignUpPage';
import NikePage from './NikePage';
import JordanPage from './JordanPage';
import MensPage from './MensPage';
import WomensPage from './WomensPage';
import YeezyPage from './YeezyPage';
import HomePage from './HomePage';
import ProfileForm from './Profile';
import PrivateRoute from './PrivateRoute';
import BalenciagaPage from './BalenciagaPage';
import GucciPage from './GucciPage';
import DGPage from './D&GPage';
import GivenchyPage from './GivenchyPage';
import PradaPage from './PradaPage';

/**Site-wide routes
 *
 * Parts of site should only be visitable when logged in. Those routes are wrapped by <PrivateRoute>, which is an authorization component
 *
 * Visiting a non-existant route redirects to the homepage
 */

function Routes({ login, signup }) {
    console.debug(
        'Routes',
        `login=${typeof login}`,
        `register=${typeof register}`
    );

    return (
        <div className="Routes">
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/signup'>
                    <SignUpPage signup={signup} />
                </Route>

                <Route exact path='/login'>
                    <LogIn login={login} />
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

                <Route exact path='/mens'>
                    <MensPage />
                </Route>

                <Route exact path='/womens'>
                    <WomensPage />
                </Route>

                <Route exact path='/balenciaga'>
                    <BalenciagaPage />
                </Route>

                <Route exact path='/prada'>
                    <PradaPage />
                </Route>

                <Route exact path='/gucci'>
                    <GucciPage />
                </Route>

                <Route exact path='/dg'>
                    <DGPage />
                </Route>

                <Route exact path='/givenchy'>
                    <GivenchyPage />
                </Route>

                <PrivateRoute exact path="/profile">
                    <ProfileForm />
                </PrivateRoute>

                <Redirect exact to="/" />
            </Switch>
        </div>

    );
}

export default Routes;
