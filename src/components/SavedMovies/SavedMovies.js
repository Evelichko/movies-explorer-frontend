import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';
import savedMovies from '../../utils/savedMovies.js';


function SavedMovies() {
    return (
        <section>

            <SearchForm />

            <MoviesCardList className='moviesCard__deleteButton' elements={savedMovies} />

        </section>
    );
}

export default SavedMovies;