import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchString';
import movies from '../../utils/movies.js';

function Movies() {

    return (
        <div>

            <SearchForm />

            <Preloader />

            <MoviesCardList className={'moviesCard__button'} elements={movies} />

            <div className='movies'>
                <button className='movies__button' type='button'>Ещё</button>
            </div>

        </div>
    );
}

export default Movies;