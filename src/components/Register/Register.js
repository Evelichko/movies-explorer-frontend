import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';
import { useForm } from 'react-hook-form';

function Register({ onSubmit, isFeedback, message }) {

  const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' });

  function onRegister(values) {
    onSubmit(values);
  }
  return (
    <section className="register">
      <Link to="/">
        <img className="register__icon" src={logo} alt="логотип" />
      </Link>

      <h1 className="register__welcomeMessage">Добро пожаловать!</h1>

      <form className="register__form"
        onSubmit={handleSubmit(onRegister)}>
        <label className="register__label" for="name">Имя</label>
        <input
          name='name'
          className='register__input'
          {...register('name', {
            required: true,
            minLength: 2,
            maxLength: 30,
            pattern: /[a-zа-яё ]/i
          })} />

        <span className='register__input-error'>
          {errors.name?.type === "required" && "Это поле нужно обязательно заполнить"}
          {errors.name?.type === "pattern" && "Поле содержит недопустимые символы"}
          {errors.name?.type === "minLength" && "Минимальное  значение должно быть не меньше 2-х символов"}
          {errors.name?.type === "maxLength" && "Достигнута максимальная длина поля"}
        </span>

        <label className="register__label" for="email">E-mail</label>
        <input
          name='email'
          className='register__input'
          {...register('email', {
            required: true,
            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/
          })} />
        <span className='register__input-error'>
          {errors.email?.type === "required" && "Это поле нужно обязательно заполнить"}
          {errors.email?.type === "pattern" && "Адрес почты должен быть валидным"}
        </span>

        <label className="register__label" for="password"> Пароль </label>
        <input
          name='password'
          className='register__input'
          type='password'

          {...register('password',
            {
              required: true,
              pattern: /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
              minLength: '8',
              maxLength: '30'
            })} />

        <span className='register__input-error'>
          {errors.password?.type === "required" && "Это поле нужно обязательно заполнить"}
          {errors.password?.type === "minLength" && "Слишком короткий пароль. Минимум 8 символа"}
          {errors.password?.type === "pattern" && "Пароль должен содержать латинские цифры, символы и буквы разного регистра"}
          {errors.password?.type === "maxLength" && "Слишком длинный пароль. Максимум 30 символов"}
        </span>

        <span className={"register__error" + (isFeedback ? ' register__error_visible' : '')}>{message}</span>
        <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
      </form>

      <p className="register__signin">Уже зарегистрированы?
        <Link to="/signin" className="register__link"> Войти</Link>
      </p>
    </section>
  )
}

export default Register;