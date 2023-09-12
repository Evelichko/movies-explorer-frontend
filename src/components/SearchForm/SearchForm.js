import React, {  useEffect } from 'react';
import {  useLocation} from 'react-router-dom';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';


function SearchForm({
    searchFilms,
    films,
    setFilterShort,
    isFilterShort
}) {

    const location = useLocation();
    const { values, handleChange, isValid, errors } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        searchFilms(values.query, films)
        if (location.pathname === '/movies') {
            localStorage.setItem('query', values.query);
        }

    }

    useEffect(() => {
        if (location.pathname === '/movies' &&
            localStorage.getItem('query')) {
            values.query = localStorage.getItem('query');
            document.getElementById("input").value = values.query;
        }
    }, []);



    return (
        <div className='searchString'>
            <form className='searchString__container' id="form" onSubmit={handleSubmit} noValidate>

                <input
                    className='searchString__input'
                    name='query'
                    type='text'
                    id='input'
                    placeholder='Фильм'
                    value={values.query || ''}
                    onChange={handleChange}
                    required
                />
                <span className='searchString__input-error'>{errors.query}</span>
                <button className='searchString__button' disabled={!isValid} type='submit'>Найти</button>
            </form>

            <FilterCheckBox
                setFilterShort={setFilterShort}
                searchFilms={searchFilms}
                films={films}
                isFilterShort={isFilterShort}
            text={values.query || ''}
            />
        </div>
    )
}

export default SearchForm;