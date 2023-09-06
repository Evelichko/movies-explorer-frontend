import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FilterCheckBox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { ERROR_MESSAGES } from '../../utils/constants';


function SearchForm({
    searchFilms,
    films,
    setFilterShort,
    isFilterShort
}) {

    const location = useLocation();
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        searchFilms(values.query, films)
        if (location.pathname === '/movies') {
            localStorage.setItem('query', values.query)
        }

    }

    useEffect(() => {
        if (
          location.pathname === '/movies' &&
          localStorage.getItem('query', values.query)
        ) {
          values.query = localStorage.getItem(
            'query', values.query
          );
        }
      }, [location]);



    return (
        <div className='searchString'>
            <form className='searchString__container' id="form" onSubmit={handleSubmit} noValidate>
              
                <input
                    className='searchString__input'
                    name='query'
                    type='text'
                    placeholder='Фильм'
                    autoComplete='off'
                    value={values.query || ''}
                    onChange={handleChange}
                    required
                />
                <span className='searchString__input-error'>{errors.query ?? ''}</span>
                <button className='searchString__button' type='submit' disabled={!isValid}>Найти</button>
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