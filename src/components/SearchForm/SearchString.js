import React from 'react';
import CheckBox from '../Checkbox/Checkbox';
import './SearchString.css';

function SearchForm() {
    return (
        <div className='searchString'>
            <form className='searchString__container'>
                <input className='searchString__input' type='text' name='search' placeholder='Фильм' required></input>
                <button className='searchString__button' type='submit'>Найти</button>
            </form>
            <CheckBox />
        </div>
    )
}

export default SearchForm;