import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className='techs' id='techs'>
            <h3 className='section-title techs__section-title'>Технологии</h3>
            <hr className="section-line techs__line"></hr>
            <h2 className='techs__title'>7 технологий</h2>
            <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__technologies'>
                <p className='techs__technology'>HTML</p>
                <p className='techs__technology'>CSS</p>
                <p className='techs__technology'>JS</p>
                <p className='techs__technology'>React</p>
                <p className='techs__technology'>Git</p>
                <p className='techs__technology'>Express.js</p>
                <p className='techs__technology'>mongoDB</p>
            </div>
        </section>
    )
}

export default Techs;