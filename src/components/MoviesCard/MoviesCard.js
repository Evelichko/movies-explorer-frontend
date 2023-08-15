import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    function handleSaveClick(evt) {
        evt.preventDefault();
        evt.target.classList.toggle('moviesCard__button-liked');
    }


    return (
        <li className='moviesCard'>
            <img className='moviesCard__card' src={props.image} alt={props.description} />
            <div className='moviesCard__description'>
                <h2 className='moviesCard__title'>{props.description}</h2>
                <div className='moviesCard__button-container'>
                    <button className={props.className} onClick={handleSaveClick} type='submit'></button>
                </div>
            </div>
            <hr className='moviesCard__line'></hr>
            <p className='moviesCard__duration'>{props.duration}</p>
        </li>
    );
}

export default MoviesCard;