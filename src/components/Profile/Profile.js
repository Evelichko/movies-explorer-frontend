import React, { useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';


function Profile({
    onSignOut,
    onEditUserInfo,
    message,
    isOk,
    isSubmitting }
) {
    const { values, handleChange, resetForm, errors, isValid } =
        useFormWithValidation();

    const user = useContext(CurrentUserContext);

    const isValidationPassed =
        !isValid ||
        (user.name === values.name && user.email === values.email);

    function handleSubmit(e) {
        e.preventDefault();
        onEditUserInfo({
            name: values.name,
            email: values.email,
        });
    };

    useEffect(() => {
        if (user) resetForm(user, {}, true);
    }, [user, resetForm]);


    return (
        <section className="profile">
            <h1 className='profile__welcomeMessage'>Привет, {user.name}!</h1>

            <form id='submit' className='profile__info' onSubmit={handleSubmit}>
                <div class='profile__info-data'>
                    <label className='profile__info-label' for='name'>Имя</label>
                    <input
                        className='profile__info-input'
                        name='name'
                        type='text'
                        value={values.name ?? ''}
                        required
                        minLength='2'
                        maxLength='30'
                        onChange={handleChange}
                    />
                </div>
                <span className='profile__error'>{errors.name ?? ''}</span>

                <hr className='profile__line' />

                <div class='profile__info-data'>
                    <label className='profile__info-label' for='email'>E-mail</label>
                    <input
                        className='profile__info-input'
                        name='email'
                        type='email'
                        value={values.email ?? ''}
                        required
                        onChange={handleChange}/>
                </div>
                <span className='profile__error'>{errors.email ?? ''}</span>
                <span className={'profile__message' + (isOk ? ' profile__message_visible' : '')}>{message}</span>

                <button form='submit'
                    type="submit"
                    disabled={isValidationPassed || isSubmitting}
                    className='profile__edit-button'>
                    Редактировать
                </button>

            </form>

            <button className='profile__exit-button' type='button' onClick={() => onSignOut()}>Выйти из аккаунта</button>
        </section>
    );
}

export default Profile;