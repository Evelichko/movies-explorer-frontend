import React from 'react';
import './Portfolio.css';
import icon from '../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <nav>
                <ul className='portfolio__projectLinks'>
                    <li className='portfolio__projectLink'>
                        <a href='https://github.com/Evelichko/how-to-learn' target='blank' className='portfolio__link'>
                            <p className='portfolio__link-text'>Статичный сайт</p>
                            <img className='portfolio__link-icon' src={icon} alt='Cтрелка-указатель' />
                        </a>
                    </li>

                    <hr className="portfolio__line" />

                    <li className='portfolio__projectLink'>
                        <a href='https://Evelichko.github.io/russian-travel/index.html' target='blank' className='portfolio__link'>
                            <p className='portfolio__link-text'>Адаптивный сайт</p>
                            <img className='portfolio__link-icon' src={icon} alt='Cтрелка-указатель' />
                        </a>
                    </li>

                    <hr className="portfolio__line" />

                    <li className='portfolio__projectLink'>
                        <a href='https://github.com/Evelichko/react-mesto-api-full-gha' target='blank' className='portfolio__link'>
                            <p className='portfolio__link-text'>Одностраничное приложение</p>
                            <img className='portfolio__link-icon' src={icon} alt='Cтрелка-указатель' />
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default Portfolio;