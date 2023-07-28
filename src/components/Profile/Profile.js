import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <section className="profile">

            <div className='profile__content'>
                <h1 className='profile__title'> Привет, Виталий</h1>

                <form className='profile__edit-form'>
                    <div class='profile__edit-form-container'>
                        <label className='profile__edit-form-label' for='name'>Имя</label>
                        <input className='profile__edit-form-input' name='name' type='text' id='name' required value="Виталий" />
                        {/* <span className='profile__edit-form-input-text'>Что-то пошло не так...</span>                    */}
                    </div>
                    <hr className='profile__info-line' />
                    <div class='profile__edit-form-container'>
                        <label className='profile__edit-form-label' for='email'>E-mail</label>
                        <input className='profile__edit-form-input' name='email' type='email' id='email' required value="yandex@yandex.ru" />
                        {/* <span className='profile__edit-form-input-text'>Что-то пошло не так...</span>  */}
                    </div>
                    <button className='profile__edit-form-button' type='submit'>Редактировать</button>

                </form>

                <button className='profile__exit-button' type='submit'>Выйти из аккаунта</button>
            </div>
        </section>
    );
}

export default Profile;