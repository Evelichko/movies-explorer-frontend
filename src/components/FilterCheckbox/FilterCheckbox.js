import React from 'react';
import './FilterCheckBox.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckBox({ 
    setFilterShort, 
    searchFilms, 
    isFilterShort,
    films,  
    text 
}) {
    
        const location = useLocation();
        const [isCheckboxOn, setCheckbox] = useState(false);

    function handleCheckbox() {

        setFilterShort(!isFilterShort);
        setCheckbox(true);

        if (location.pathname === '/movies') {
            localStorage.setItem('shortFilms', !isFilterShort);
        }
    }
  


    useEffect(() => {
        if (location.pathname === '/movies') {
            if (localStorage.getItem('shortFilms')) {
                setFilterShort(JSON.parse(localStorage.getItem('shortFilms')));
            }
        }

        if (location.pathname === '/saved_movies') {
            setFilterShort(false);
        }

    }, [location]);

    useEffect(() => {
        if (isCheckboxOn === true) {
            searchFilms(text, films)
        } 
    }, [isFilterShort, isCheckboxOn]);

    return (
        <div className='checkBox'>
            <form className='checkBox__form'>
                <input type="checkbox" className='checkBox__input' checked={isFilterShort}
                    onChange={handleCheckbox} />
            </form>
            <p className='checkBox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckBox