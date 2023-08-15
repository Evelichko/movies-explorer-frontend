import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="aboutProjectInfo" id='aboutProject'>
            <h3 className='aboutProjectInfo__title section-title'>O проекте</h3>
            <hr className="aboutProjectInfo__line section-line"></hr>
            <div className="aboutProjectInfo__diplomaInfo">
                <div className="aboutProjectInfo__steps">
                    <h4 className="aboutProjectInfo__step-title">Дипломный проект включал 5 этапов</h4>
                    <p className='aboutProjectInfo__step-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProjectInfo__steps">
                    <h4 className="aboutProjectInfo__step-title">На выполнение диплома ушло 5 недель</h4>
                    <p className='aboutProjectInfo__step-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutProjectInfo__scheme'>
                <p className='aboutProjectInfo__backend-text'>1 неделя</p>
                <p className='aboutProjectInfo__frontend-text'>4 недели</p>
                <p className='aboutProjectInfo__backend-title'>Back-end</p>
                <p className='aboutProjectInfo__frontend-title'>Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;