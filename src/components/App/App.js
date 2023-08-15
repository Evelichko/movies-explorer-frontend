import React, { useState } from "react";
import { Route, useNavigate, Routes, Link } from 'react-router-dom';
import './App.css';

import PageNotFound from '../PageNotFound/PageNotFound.js';
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

    const navigate = useNavigate();

    const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(false);

    function closePopup() {
        setNavigationMenuOpen(false);
    }


    return (
        <div className="page">
            <Routes>
                <Route exact path='/' element={<> 
>                    <Header className="header header-front">
                        <div className="header__entrance">
                            <Link to='/signup' className='header__entrance-registry'>Регистрация</Link>
                            <Link to='/signin' className='header__entrance-login'>Войти</Link>
                        </div>
                    </Header>
                    <Main />
                    <Footer />
                </>}>
                </Route>

                <Route exact path='/movies' element={<>
                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            handleClosePopup={closePopup} />
                        <button className='header__burger' type='button' onClick={() => setNavigationMenuOpen(true)} />
                    </Header>
                    <Movies />
                    <Footer />
                </>}>
                </Route>

                <Route exact path='/saved_movies' element={<>
                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            handleClosePopup={closePopup} />
                        <button className='header__burger' onClick={() => setNavigationMenuOpen(true)} type='button' />
                    </Header>
                    <SavedMovies />
                    <Footer />
                </>}>

                </Route>

                <Route exact path='/profile' element={<>
                    <Header className='header'>
                        <Navigation
                            isOpen={isNavigationMenuOpen}
                            handleClosePopup={closePopup} />

                        <button className='header__burger' onClick={() => setNavigationMenuOpen(true)} type='button' />
                    </Header>
                    <Profile />
                </>}>

                </Route>

                <Route path='/signup' element={<>
                    <Register />
                </>}>
                </Route>

                <Route path='/signin' element={<>
                    <Login />
                </>}>
                </Route>

                <Route exact path='*' element={<>
                    <PageNotFound />
                </>}>
                </Route>
            </Routes>
        </div>
    )
}

export default App;