import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';

function Movies({
    filmCards,
    searchFilms,
    message,
    films,
    isLoading,
    setFilterShort,
    isFilterShort,
    isLikedFilm,
    handleCardLike }) 
    
    {
    return (
        <div>

            <SearchForm
                searchFilms={searchFilms}
                setFilterShort={setFilterShort}
                isFilterShort={isFilterShort}
                filmCards={filmCards}
                films={films}/>
                
            <p className='movies__mеssage'>{message}</p>

            <Preloader isLoading={isLoading} />

            <MoviesCardList
                filmCards={filmCards}
                isLikedFilm={isLikedFilm}
                isLoading={isLoading}
                handleCardLike={handleCardLike} />
        </div>
    );
}

export default Movies;