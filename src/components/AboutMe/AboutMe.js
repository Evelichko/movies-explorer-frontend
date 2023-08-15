import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar_img1.jpg';

function AboutMe() {
    return (
        <section className='aboutMeInfo' id='aboutMe'>
            <h3 className='section-title aboutMeInfo__title'>Студент</h3>
            <hr className="section-line aboutMeInfo__line"></hr>

            <div className='aboutMeInfo__description'>
                <div className='aboutMeInfo__mainContent'>
                    <h2 className='aboutMeInfo__myName'>Екатерина</h2>
                    <p className='aboutMeInfo__shortInfo'>Фронтенд-разработчик, 27 лет</p>

                    <p className='aboutMeInfo__story'>Выросла, живу и работаю в Москве. Окончила бакалавриат и магистратуру Дипакадемии МИД РФ. С программированием никак до покупки курса связана не была. Это для меня совершенно новый интересный мир, который приходится познавать с нуля. Разве что можно упомянуть несколько бесплатных курсов на популярных программистких платформах. Все эти трудности мне по душе. В будущем планирую и дальше развиваться в этой сфере и изучать другие языки программирования.  </p>
                    <a href="https://github.com/Evelichko" target="_blank" className='aboutMeInfo__githubLink' rel="noreferrer">Github</a>
                </div>

                <img className='aboutMeInfo__myFoto' src={avatar} alt="фото" />

            </div>

        </section>
    )
}

export default AboutMe;