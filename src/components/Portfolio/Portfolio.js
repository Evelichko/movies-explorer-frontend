import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <nav>
                <ul className='porfolio__links'>
                    <li className = 'portfolio__link'>
                        <a href='https://github.com/Evelichko/how-to-learn' target='blank' className='porfolio__nav-link'>
                            <p className='portfolio__link-text'>Статичный сайт</p> 
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                         </a>   
                    </li>
                    

                    <hr className="potrfolio__line"/>

                    <li className = 'portfolio__link'>
                        <a href='https://Evelichko.github.io/russian-travel/index.html' target='blank' className='porfolio__nav-link'>
                            <p className='portfolio__link-text'>Адаптивный сайт</p> 
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                        </a>
                    </li>

                    <hr className="potrfolio__line"/>

                    <li className = 'portfolio__link'>
                        <a href='https://github.com/Evelichko/react-mesto-api-full-gha' target='blank' className='porfolio__nav-link'>
                            <p className='portfolio__link-text'>Одностраничное приложение</p>
                            <img className='portfolio__link-image' src={arrow} alt='стрелка'/>
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default Portfolio;