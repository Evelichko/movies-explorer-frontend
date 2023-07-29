import React from 'react';
import './MoviesCard.css';

function MoviesCard (props) {

    function handleSaveClick(evt) {
        evt.preventDefault();
        evt.target.classList.toggle('moviesCard__button-liked');
    }


    return (
        <li className='moviesCard'>
            <img  className = 'moviesCard__image' src={props.image} alt={props.description}/>
            <div className='moviesCard__information'>
                <h2 className='moviesCard__title'>{props.description}</h2>
                <p className='moviesCard__description'>{props.duration}</p>
            </div>

            <button className= {props.className} onClick={handleSaveClick} type='submit'></button> 
           
        </li>
    );
}

export default MoviesCard;