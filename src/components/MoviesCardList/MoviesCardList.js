import React, { useEffect, useState } from 'react';
import './MovieCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useLocation } from "react-router-dom";


function MoviesCardList({
    filmCards,
    isLikedFilm,
    onRemoveFilm,
    className,
    isLoading,
    handleCardLike
}) {

    const location = useLocation();
    const [visibleCards, setVisibleCards] = useState(0);
    const screen = window.screen.width;

    useEffect(() => {
        showCardsOnScreen()
    }, [])

    function showCardsOnScreen() {

        if (screen >= 1280) {
            setVisibleCards(12);
        } else if (screen > 989) {
            setVisibleCards(9);
        } else if (screen <= 989 && screen > 767) {
            setVisibleCards(8);
        } else if (screen <= 767) {
            setVisibleCards(5);
        }
    }


    function showMore() {
        if (screen >= 1280) {
            setVisibleCards(visibleCards + 4)
        } else if (screen > 989) {
            setVisibleCards(visibleCards + 3)
        } else if (screen <= 989) {
            setVisibleCards(visibleCards + 2)
        }
    }

    return (
        <section className={'movieCardList' + (isLoading ? ' movieCardList_notvisible' : '')}>
            <ul className='movieCardList__movies'>
                {location.pathname === '/movies' ?
                    (filmCards.slice(0, visibleCards).map((card) => (
                        <MoviesCard
                            key={card.movieId || card.id}
                            id={card.id}
                            movieId={card.movieId}
                            country={card.country}
                            image={card.image}
                            description={card.description}
                            duration={card.duration}
                            nameRU={card.nameRU}
                            className={className}
                            trailerLink={card.trailerLink}
                            thumbnail={card.thumbnail}
                            movie={card}
                            isLikedFilm={isLikedFilm}
                            onRemoveFilm={onRemoveFilm}
                            handleCardLike={handleCardLike}>
                        </MoviesCard>
                    ))) :
                    (filmCards.slice(0, isLikedFilm).map((card) => (
                        <MoviesCard
                            key={card.movieId || card.id}
                            id={card.id}
                            movieId={card.movieId}
                            country={card.country}
                            image={card.image}
                            description={card.description}
                            duration={card.duration}
                            nameRU={card.nameRU}
                            className={className}
                            trailerLink={card.trailerLink}
                            thumbnail={card.thumbnail}
                            movie={card}
                            isLikedFilm={isLikedFilm}
                            onRemoveFilm={onRemoveFilm}
                            handleCardLike={handleCardLike}>
                        </MoviesCard>
                    )))
                }
            </ul>
            {location.pathname === '/movies' ?
                ((filmCards.length > visibleCards) ? (
                    <section className='movieCardList__more'>
                        <button className='movieCardList__button' type='button' onClick={showMore}> Ещё </button>
                    </section>
                ) : null) : null}
        </section>
    );
}

export default MoviesCardList;
