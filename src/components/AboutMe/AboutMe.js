import React from 'react';
import './AboutMe.css';
import foto from '../../images/avatar_img1.jpg';

function AboutMe () {
    return (
        <section className='aboutMe' id='aboutMe'>
            <h3 className='section-title'>Студент</h3>
            <hr className="section-line aboutMe__line"></hr>

            <div className='aboutMe__content'>
                <div className='aboutMe__textContent'>
                    <h2 className='aboutMe__title'>Екатерина</h2>
                    <p className='aboutMe__description'>Фронтенд-разработчик, 27 лет</p>

                    <p className='aboutMe__text'>Выросла, живу и работаю в Москве. Окончила бакалавриат и магистратуру Дипакадемии МИД РФ. С программированием никак до покупки курса связана не была. Это для меня совершенно новый интересный мир, который приходится познавать с нуля. Разве что можно упомянуть несколько бесплатных курсов на популярных программистких платформах. Все эти трудности мне по душе. В будущем планирую и дальше развиваться в этой сфере и изучать другие языки программирования.  </p>
                    <a href="https://github.com/Evelichko" target="_blank" className='aboutMe__link' rel="noreferrer">Github</a>
                </div>
                
                <img  className='aboutMe__foto' src={foto} alt="фото"/>
                
            </div>

        </section>
    )
}

export default AboutMe;