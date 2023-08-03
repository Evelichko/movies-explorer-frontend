import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line"/>
            <div className="footer__copyright">
                <p className="footer__copyright-data">© 2023</p>
                <div className="footer__copyright-links">
                    <a className="footer__copyright-link" href="https://practicum.yandex.ru" target="blank">Яндекс.Практикум</a>
                    <a className="footer__copyright-link" href="https://github.com/Evelichko" target="blank">Github</a>
                </div>
            </div>
        </footer>     
    );
}

export default Footer;