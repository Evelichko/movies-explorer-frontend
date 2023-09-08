import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigation.css'
import icon from '../../images/account-icon.svg';

function Navigation({ isOpen, onClose }) {
    const location = useLocation();

    return (
        location.pathname === '/' ? (
            <div className={'navigation' + (isOpen ? ' navigation_open' : '')}>
                <div className="navigation__container-empty"></div>
                <div className="navigation__menu ">
                    <nav className="navigation__refs">
                        <Link to='/' className='navigation__ref' onClick={onClose}>Главная</Link>
                        <Link to='/movies' className='navigation__ref navigation_white' onClick={onClose}>Фильмы</Link>
                        <Link to='/saved_movies' className='navigation__ref navigation_white' onClick={onClose}>Сохранённые фильмы</Link>
                    </nav>

                    <Link className='navigation__account navigation__theme_white' to='/profile' onClick={onClose}>
                        <p className='navigation__account-text'>Аккаунт</p>
                        <div className='navigation__account-icon'>
                            <img className='navigation__account-image' src={icon} alt='значок профиля' />
                        </div>
                    </Link>
                    <button className='navigation__close' onClick={onClose} type='button' />
                </div>
            </div>
        ) : (
            <div className={'navigation' + (isOpen ? ' navigation_open' : '')}>
                <div className="navigation__container-empty"></div>
                <div className="navigation__menu">
                    <nav className="navigation__refs">
                        <Link to='/' className='navigation__ref' onClick={onClose}>Главная</Link>
                        <Link to='/movies' className='navigation__ref' onClick={onClose}>Фильмы</Link>
                        <Link to='/saved_movies' className='navigation__ref' onClick={onClose}>Сохранённые фильмы</Link>
                    </nav>

                    <Link className='navigation__account' to='/profile' onClick={onClose}>
                        <p className='navigation__account-text'>Аккаунт</p>
                        <div className='navigation__account-icon'>
                            <img className='navigation__account-image' src={icon} alt='значок профиля' />
                        </div>
                    </Link>
                    <button className='navigation__close' onClick={onClose} type='button' />
                </div>
            </div>
        ))
}

export default Navigation;