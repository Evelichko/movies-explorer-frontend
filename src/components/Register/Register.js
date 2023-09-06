import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';


function Register({ onSubmit, isError, message }) {
  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }
  useEffect(() => {
    resetForm();
  }, [resetForm]);


  return (
    <section className="register">
      <Link to="/">
        <img className="register__icon" src={logo} alt="логотип" />
      </Link>

      <h1 className="register__welcomeMessage">Добро пожаловать!</h1>

      <form className="register__form"
        onSubmit={handleSubmit}>
        <label className="register__label" for="name">Имя</label>
        <input
          name='name'
          className='register__input'
          onChange={handleChange}
          value={values.name ?? ''}
          type='text'
          required
          minLength='2'
          maxLength='30'
        />
        <span className='register__input-error'>{errors.name ?? ''}</span>

        <label className="register__label" for="email">E-mail</label>
        <input
          name='email'
          className='register__input'
          onChange={handleChange}
          value={values.email ?? ''}
          type='email'
          required
        />
        <span className='register__input-error'>{errors.email ?? ''}</span>

        <label className="register__label" for="password"> Пароль </label>
        <input
          name='password'
          className='register__input'
          onChange={handleChange}
          value={values.password || ''}
          type='password'
          required
          minLength='6'
          maxLength='30'
        />
        <span className='register__input-error'>{errors.password ?? ''}</span>

        <span className={"register__error" + (isError ? ' register__error_visible' : '')}>{message}</span>
        <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
      </form>

      <p className="register__signin">Уже зарегистрированы?
        <Link to="/signin" className="register__link"> Войти</Link>
      </p>
    </section>
  )
}

export default Register;