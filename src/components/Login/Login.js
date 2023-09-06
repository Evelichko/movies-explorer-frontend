import React from 'react';
import { useEffect } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom'
import './Login.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
function Login({
  onSubmit,
  isFeedback,
  message }) {

  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  };


  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="логотип" />
      </Link>

      <h1 className="login__welcomeMessage">Рады видеть!</h1>

      <form className="login__form" onSubmit={handleSubmit}>

        <label className="login__label" htmlFor='email'>E-mail
          <input
            name='email'
            className='login__input'
            onChange={handleChange}
            value={values.email ?? ''}
            type='email'
            required
          />
          <span className='login__input-error'>{errors.email ?? ''}</span>
        </label>

        <label className="login__label" htmlFor="password">Пароль
          <input
            name='password'
            className='login__input'
            onChange={handleChange}
            value={values.password ?? ''}
            type='password'
            required
          />
          <span className='login__input-error'>{errors.password ?? ''}</span></label>

        <span className={"login__error" + (isFeedback ? ' login__error_visible' : '')}>{message}</span>

        <button disabled={!isValid} className={'login__button'}
          type="submit">Войти</button>

      </form>

      <p className="login__signup">Ещё не зарегистрированы?
        <Link to="/signup" className="login__link">Регистрация</Link>
      </p>
    </section>
  )
}

export default Login;