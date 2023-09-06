import React, { useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import SearchForm from '../SearchForm/SearchForm.js';

function SavedMovies({
    filmCards,
    onRemoveFilm,
    searchFilms,
    getSavedFilms,
    isLogged,
    filteredSavedCard,
    isSearched,
    onSearched,
    setFilterShort,
    isFilterShort,
    onSetMessage,
    message,
    isLikedFilm

}) {

    useEffect(() => {
        if (isLogged) {
            onSearched(false);
            onSetMessage('');
            getSavedFilms();
        }
    }, [isLogged, isLikedFilm])

    return (
        <div>

            <SearchForm searchFilms={searchFilms}
                films={filmCards}
                setFilterShort={setFilterShort}
                isFilterShort={isFilterShort} />
            <p className='movies__mеssage'>{message}</p>

            {(!isSearched) ? (<MoviesCardList filmCards={filmCards} onRemoveFilm={onRemoveFilm} />)
                : (<MoviesCardList filmCards={filteredSavedCard} onRemoveFilm={onRemoveFilm} />)}
        </div>
    );
}

export default SavedMovies;