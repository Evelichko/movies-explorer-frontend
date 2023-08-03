import React, { useState } from "react";
import { Route, useHistory, Switch, Link } from 'react-router-dom';
import './App.css';

import NotFound from '../NotFound/NotFound.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function App() {

    const history = useHistory();

    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

    function onClose() {
        setIsNavigationMenuOpen(false);
    }


    return (
        <div className="page">
            <Switch>
                <Route exact={true} path='/'>
                    <Header className=" header header-front">
                        <div className="header__entrance">
                            <Link to='/signup' className='header__entrance-link'>Регистрация</Link>
                            <button className="header__entrance-button" onClick={() => history.push('./signin')} type='button'>Войти</button>
                        </div>
                    </Header>

                    <Main />

                    <Footer />
                </Route>

                <Route exact={true} path='/movies'>

                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            onClose={onClose} />
                        <button className='header__burger' type='button' onClick={() => setIsNavigationMenuOpen(true)} />
                    </Header>

                    <Movies />

                    <Footer />
                </Route>

                <Route exact={true} path='/saved_movies'>
                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            onClose={onClose} />

                        <button className='header__burger' onClick={() => setIsNavigationMenuOpen(true)} type='button' />
                    </Header>

                    <SavedMovies />

                    <Footer />
                </Route>

                <Route exact={true} path='/profile'>

                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            onClose={onClose} />

                        <button className='header__burger' onClick={() => setIsNavigationMenuOpen(true)} type='button' />
                    </Header>

                    <Profile />
                </Route>

                <Route path='/signup'>
                    <Register />
                </Route>

                <Route path='/signin'>
                    <Login />
                </Route>

                <Route exact={true} path='*'>
                    <NotFound />
                </Route>
            </Switch>

        </div>
    )
}

export default App;