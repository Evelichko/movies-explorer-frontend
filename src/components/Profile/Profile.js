import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <section className="profile">
                <h1 className='profile__welcomeMessage'> Привет, Виталий!</h1>

                <form className='profile__info'>
                    <div class='profile__info-data'>
                        <label className='profile__info-label' for='name'>Имя</label>
                        <input className='profile__info-input' name='name' type='text' id='name' required value="Виталий" />
                    </div>
                    <hr className='profile__line' />
                    <div class='profile__info-data'>
                        <label className='profile__info-label' for='email'>E-mail</label>
                        <input className='profile__info-input' name='email' type='email' id='email' required value="yandex@yandex.ru" />
                    </div>
                    <button className='profile__edit-button' type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit-button' type='submit'>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;