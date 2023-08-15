import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import savedMovies from '../../utils/savedMovies.js';
import SearchForm from '../SearchForm/SearchForm.js';


function SavedMovies() {
    return (
        <div>

            <SearchForm />

            <MoviesCardList className='moviesCard__delete' elements={savedMovies} />

        </div>
    );
}

export default SavedMovies;