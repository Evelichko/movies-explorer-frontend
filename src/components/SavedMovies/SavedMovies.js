import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            onSearched(false);
            onSetMessage('');
            getSavedFilms();
        }
    }, [isLogged])

    return (
        <div>

            <SearchForm searchFilms={searchFilms}
                films={filmCards}
                setFilterShort={setFilterShort}
                isFilterShort={isFilterShort} />
            <p className='movies__mеssage'>{message}</p>

            {(!isSearched) ? (<MoviesCardList filmCards={filmCards} onRemoveFilm={onRemoveFilm} />)
                : 
                 (<MoviesCardList filmCards={filteredSavedCard} onRemoveFilm={onRemoveFilm} />)
                }
        </div>
    );
}

export default SavedMovies;