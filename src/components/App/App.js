import React, { useState, useEffect } from "react";
import { Route, useLocation, Link, useNavigate, Routes } from 'react-router-dom';
import * as auth from '../../utils/Auth.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import './App.css';


import PageNotFound from '../PageNotFound/PageNotFound.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import moviesApi from '../../utils/MoviesApi.js'
import mainApi from '../../utils/MainApi'
import Header from "../Header/Header.js";
import Footer from '../Footer/Footer.js';
import Navigation from '../Navigation/Navigation.js';

function App() {

    const navigate = useNavigate();
    const location = useLocation();

    const [activeUser, setActiveUser] = useState('');
    const [films, setFilms] = useState([]);
    const [isFilterShort, setFilterShort] = useState(false);
    const [filmCards, setFilmCards] = useState([]);
    const [feedbackMessage, setFeedback] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [savedCards, setSavedCards] = useState([]);
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const [isLogged, setLogged] = useState(false);
    const [filteredSavedCard, setfilteredSavedCard] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); //


    useEffect(() => {
        tokenCheck();
    }, []);

    // useEffect(() => {
    //     navigate(JSON.parse(window.sessionStorage.getItem('needRoute') || '{}'))
    //     window.onbeforeunload = () => {
    //         window.sessionStorage.setItem('needRoute', JSON.stringify(window.location.pathname))
    //     }
    // }, [])

    useEffect(() => {
        setMessage('');
    }, [navigate])

    useEffect(() => {

        if (isLogged) {
            // navigate('/movies');
            moviesApi.getAllFilms()
                .then((films) => {
                    localStorage.setItem('films', JSON.stringify(films));
                    setFilms(
                        JSON.parse(localStorage.getItem('films'))
                    )
                })
                .catch((err) => {
                    console.log(err);
                    setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')

                })

            getSavedFilms();

            if (localStorage.getItem('filmCards')) {
                const uploadedFilms = JSON.parse(localStorage.getItem('filmCards'));
                setFilmCards(uploadedFilms.map((film) => ({
                    movieId: film.id,
                    country: film.country,
                    nameEN: film.nameEN,
                    nameRU: film.nameRU,
                    year: film.year,
                    image: `https://api.nomoreparties.co/${film.image.url}`,
                    description: film.description,
                    duration: film.duration,
                    trailerLink: film.trailerLink,
                    director: film.director,
                    thumbnail: `https://api.nomoreparties.co/${film.image.url}`
                })));
            }
        }
    }, [isLogged]);

    function tokenCheck() {
        if (localStorage.getItem('token')) {
            const jwt = localStorage.getItem('token');
            if (jwt) {
                getUser(jwt);
            }
        }
    }

    function getUser(token) {

        Promise.all([auth.getUser(token)])
            .then(([user]) => {
                mainApi.getToken(token);
                setActiveUser(user);
                setLogged(true);
                navigate(location.pathname);

            })
            .catch((err) => {
                setLogged(false)
                console.log(err);
            })
    }


    function onRegister(data) {

        setMessage('');
        auth.handleRegister(data.email, data.password, data.name)
            .then((res) => {
                onLogin(data);   
            })
            .catch((err) => {
                setMessage('Что-то пошло не так');
                setFeedback(true);
                console.log(err);
            })
    }


    function onLogin(infoUser) {

        auth.handleLogin(infoUser.email, infoUser.password)
            .then((data) => {
setLogged(true);
            navigate('/movies')
    })
            .catch((err) => {
                setMessage('Что-то пошло не так');
                setFeedback(true);
                console.log(err);
            })

    }


    function editUserInfo(newInfo) {
        setIsSubmitting(true);

        mainApi.editUserInfo(newInfo)
            .then((data) => {
                setActiveUser(data);
                setFeedback(true);
                setMessage('Новые данные успешно сохранились');
                setIsSubmitting(false);

            })
            .catch((err) => {
                console.log(err);
                setFeedback(true);
                setMessage('Обновить данные не получилось попробуйте позже')
            })
    }

    function checkFilmsFounded(films) {
        if (films.length === 0) {
            setMessage('Ничего не найдено')
        } else {
            setMessage('');
        }
    }

    function searchFilms(query, films) {

        const filteredCards = films.filter((card) => (card.nameRU.toLowerCase().includes(query.toLowerCase())) && (isFilterShort === true ? card.duration <= 40 : ' '));
        if (location.pathname === '/movies') {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                checkFilmsFounded(filteredCards);
                localStorage.setItem('filmCards', JSON.stringify(filteredCards))
                setFilmCards(
                    filteredCards.map((card) => ({
                        movieId: card.id,
                        country: card.country,
                        nameEN: card.nameEN,
                        nameRU: card.nameRU,
                        year: card.year,
                        image: `https://api.nomoreparties.co/${card.image.url}`,
                        description: card.description,
                        duration: card.duration,
                        thumbnail: `https://api.nomoreparties.co/${card.image.url}`,
                        trailerLink: card.trailerLink,
                        director: card.director
                    }))
                )
            }, 1000)

        } else {
            setIsSearched(true);
            checkFilmsFounded(filteredCards);
            setfilteredSavedCard(filteredCards);
        }
    }

    function handleCardLike(card) {
        if (checkCardLiked(card) === false) {
            likeAndSaveFilm(card);
        } else {
            removeFilm(card)
        }
    }

    function checkCardLiked(card) {
        const isLiked = savedCards.some((film) => {
            if (film.movieId === card.movieId) {
                return film;
            }
        })
        return isLiked;
    }

    function likeAndSaveFilm(card) {

        mainApi.saveFilm(card)
            .then((card) => {
                getSavedFilms([card, ...savedCards]);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function removeFilm(film) {

        savedCards.forEach((card) => {
            if (card.movieId === film.movieId) {
                mainApi.removeFilm(card, card.id)
                    .then(() => {
                        const updateSavedCards = savedCards.filter(item => item.id !== (card.id));
                        setSavedCards(updateSavedCards);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
    }

    function getSavedFilms() {

        mainApi.getFilms()
            .then((data) => {
                setSavedCards(
                    data.map((savedMovie) => ({
                        id: savedMovie._id,
                        movieId: savedMovie.movieId,
                        country: savedMovie.country,
                        image: savedMovie.image,
                        description: savedMovie.description,
                        duration: savedMovie.duration,
                        nameEN: savedMovie.nameEN,
                        nameRU: savedMovie.nameRU,
                        year: savedMovie.year,
                        trailerLink: savedMovie.trailerLink,
                        director: savedMovie.director,
                        thumbnail: savedMovie.thumbnail
                    })
                    ))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function onCloseBurger() {
        setBurgerOpen(false);
    }

    function onSignOut() {
        localStorage.clear();
        setFilmCards([]);
        setfilteredSavedCard([]);
        setLogged(false);
        navigate('/')
    }

    return (
        <CurrentUserContext.Provider value={activeUser}>
            <div className="page">
                <Routes>
                    <Route path='/' element={
                        <>
                            {!isLogged ? (<Header className="header header-front"><div className="header__entrance">
                                <Link to='/signup' className='header__entrance-registry'>Регистрация</Link>
                                <Link to='/signin' className='header__entrance-login'>Войти</Link> </div> </Header>) :
                                (<Header className='header header__loggedIn' >
                                    <Navigation
                                        isOpen={isBurgerOpen}
                                        onClose={onCloseBurger} />
                                    <button className='header__burger header__burger_white' type='button' onClick={setBurgerOpen} />
                                </Header>)}
                            <Main />
                            <Footer />
                        </>
                    }>
                    </Route>

                    <Route path='/movies'
                        element={<ProtectedRoute isLogged={isLogged}>
                            <Header className='header' >
                                <Navigation
                                    isOpen={isBurgerOpen}
                                    onClose={onCloseBurger} />
                                <button className='header__burger' type='button' onClick={setBurgerOpen} />
                            </Header>
                            <Movies
                                filmCards={filmCards}
                                searchFilms={searchFilms}
                                films={films}
                                setFilterShort={setFilterShort}
                                isFilterShort={isFilterShort}
                                isLikedFilm={checkCardLiked}
                                handleCardLike={handleCardLike}
                                message={message}
                                isLoading={isLoading}
                            />
                            <Footer />
                        </ProtectedRoute>
                        } />

                    <Route path='/saved_movies' element={
                        <ProtectedRoute isLogged={isLogged} >
                            <Header className='header'>
                                <Navigation
                                    isOpen={isBurgerOpen}
                                    onClose={onCloseBurger} />
                                <button className='header__burger' type='button' onClick={setBurgerOpen} />
                            </Header>
                            <SavedMovies
                                onClick={setBurgerOpen}
                                getSavedFilms={getSavedFilms}
                                isSearched={isSearched}
                                onSearched={setIsSearched}
                                filmCards={savedCards}
                                setFilterShort={setFilterShort}
                                isFilterShort={isFilterShort}
                                filteredSavedCard={filteredSavedCard}
                                onRemoveFilm={removeFilm}
                                searchFilms={searchFilms}
                                isLikedFilm={checkCardLiked}
                                message={message}
                                onSetMessage={setMessage} />
                            <Footer />
                        </ProtectedRoute>
                    } />

                    <Route path='/profile' element={
                        <ProtectedRoute isLogged={isLogged} >
                            <Header className='header'>
                                <Navigation
                                    isOpen={isBurgerOpen}
                                    onClose={onCloseBurger} />
                                <button className='header__burger' type='button' onClick={setBurgerOpen} />
                            </Header>
                            <Profile
                                onSignOut={onSignOut}
                                onEditUserInfo={editUserInfo}
                                message={message}
                                onSetMessage={setMessage}
                                isOk={feedbackMessage}
                                isSubmitting={isSubmitting} />
                        </ProtectedRoute>
                    } />

                    <Route path="/signup" element={<Register onSubmit={onRegister} isFeedback={feedbackMessage} message={message} />} />
                    <Route path="/signin" element={<Login onSubmit={onLogin} isFeedback={feedbackMessage} message={message} />} />
                    <Route exact path='*' element={<><PageNotFound /></>}></Route>

                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;