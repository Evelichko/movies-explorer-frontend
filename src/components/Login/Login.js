import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom'
import './Login.css';
import { useForm } from 'react-hook-form';
function Login({
  onSubmit,
  isFeedback,
  message }) {

  const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' });

  function onLogin(values) {
    onSubmit(values);
  }

  return (
    <section className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="логотип" />
      </Link>

      <h1 className="login__welcomeMessage">Рады видеть!</h1>

      <form className="login__form" onSubmit={handleSubmit(onLogin)}>

        <label className="login__label" htmlFor='email'>E-mail
          <input
            name='email'
            className='login__input'
            {...register('email', {
              required: true,
              pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/
            })} />
          <span className='login__input-error'>
            {errors.email?.type === "required" && "Это поле нужно обязательно заполнить"}
            {errors.email?.type === "pattern" && "Адрес почты должен быть валидным"}
          </span>
        </label>

        <label className="login__label" htmlFor="password">Пароль
          <input
            name='password'
            className='login__input'
            type='password'

            {...register('password',
              {
                required: true,
                pattern: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
                minLength: '8',
                maxLength: '30'
              })} />

          <span className='login__input-error'>{errors.password?.type === "required" && "Это поле нужно обязательно заполнить"}
            {errors.password?.type === "minLength" && "Слишком короткий пароль. Минимум 8 символа"}
            {errors.password?.type === "pattern" && "Пароль должен содержать латинские цифры, символы и буквы разного регистра"}
            {errors.password?.type === "maxLength" && "Слишком длинный пароль. Максимум 30 символов"}
          </span>
        </label>

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