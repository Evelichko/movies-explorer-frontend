import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({
    image,
    duration,
    nameRU,
    trailerLink, 
    movie,
    isLikedFilm,
    onRemoveFilm,
    handleCardLike}) {

    const location = useLocation();


    return (
        <li className='moviesCard' id='moviesCard'>
            <a href={trailerLink} target="_blank" rel="noreferrer">
                <img className='moviesCard__card' src={image} alt={nameRU} />
            </a>
            <div className='moviesCard__description'>
                <h2 className='moviesCard__title'>{nameRU}</h2>

                {(location.pathname === '/movies') ? (
                    <button className={`${isLikedFilm(movie) ? 'moviesCard__button moviesCard__button_liked' : 'moviesCard__button'}`}

                        type='submit'
                        onClick={() => handleCardLike(movie)}>
                    </button>
                ) : (
                    <button className='moviesCard__delete'
                        type='submit'
                        onClick={() => onRemoveFilm(movie)} />
                )}
            </div>
            <hr className='moviesCard__line'></hr>
            <p className='moviesCard__duration'> {`${Math.trunc(duration / 60) > 0 ? `${Math.trunc(duration / 60)}ч` :
            ''} ${duration % 60}м`}</p>
        </li>
    );
}

export default MoviesCard;