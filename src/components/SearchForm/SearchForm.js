import React from 'react';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <div className='searchString'>
            <form className='searchString__container'>
                <input className='searchString__input' type='text' name='search' placeholder='Фильм' required></input>
                <button className='searchString__button' type='submit'>Найти</button>
            </form>
            <FilterCheckBox />
        </div>
    )
}

export default SearchForm;