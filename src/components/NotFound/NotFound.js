import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

function NotFound() {
    return (
        <div className="fail">
            <div className="fail__container">
                <h2 className="fail__title">404</h2>
                <p className="fail__subtitle">Страница не найдена</p>
            </div>
            <Link to='' className="fail__button-back">Назад</Link>
        </div>
    );
}

export default NotFound;