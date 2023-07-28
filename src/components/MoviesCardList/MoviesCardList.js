import React from 'react';
import './MovieCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movies from '../../utils/movies';


function MoviesCardList (props) {

    return (
        <section className='movieCardList'>
            <ul className='movieCardList__elements'>

                {props.elements.map((movie) => (
                    <MoviesCard 
                        image = {movie.image}
                        description = {movie.description}
                        duration = {movie.duration}
                        className = {props.className}>
                      </MoviesCard>
                    
                ))}

            </ul>
        </section>
    );
}

export default MoviesCardList;