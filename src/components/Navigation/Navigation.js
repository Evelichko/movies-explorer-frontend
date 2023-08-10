import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'
import icon from '../../images/account-icon.svg';

function Navigation ({isOpen, handleClosePopup}) {
    return (
        <div className={'navigation' +  (isOpen?' navigation_open':'')}>
            <div className="navigation__container-empty"></div>
            <div className="navigation__menu">
                <nav className="navigation__links">
                    <Link to='/' className='navigation__link'>Главная</Link>
                    <Link to='/movies' className='navigation__link'>Фильмы</Link>
                    <Link to='saved_movies' className='navigation__link'>Сохранённые фильмы</Link>
                </nav>

                <Link className = 'navigation__account' to='/profile'>
                    <p className='navigation__account-text'>Аккаунт</p>
                    <div className='navigation__account-icon'>
                        <img className='navigation__account-image' src={icon} alt='значок профиля' />
                    </div>
                </Link>
                <button className='navigation__close' onClick={handleClosePopup} type='button' />
            </div>    
        </div>
    )
}

export default Navigation;