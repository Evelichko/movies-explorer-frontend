import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import movies from '../../utils/movies.js';

function Movies () {
    
    return (
        <section>
           
            <SearchForm />

            <Preloader />

            <MoviesCardList className={'moviesCard__button'} elements={movies}/>

            <section className='movies'>
                <button className='movies__button' type='button'>Ещё</button>
            </section>

        </section>
    );
}

export default Movies;