import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox () {
    return(
        <div className='checkBox'>
            <form className='checkBox__form'>
                    <input type="checkbox" className='checkBox__input'/>
            </form>
            <p className='checkBox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckBox;