import React from 'react';
import logo from '../../images/landing-logo.svg';
import './Promo.css';

function Promo () {

    return (
        <section className="promo">
            <img  className="promo__logo" src={logo} alt="лого"/>
            <h1 className = "promo__title-text">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <h2 className = "promo__subtitle-text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
            <button type="button" className="promo__button"><a className="promo__button-link" href="#aboutProject">Узнать больше</a></button>
        </section>             
    );
}

export default Promo;