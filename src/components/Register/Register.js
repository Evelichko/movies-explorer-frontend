import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";

function Register() {
    return (
        <section className="register">
            <Link to="/">
                <img className="register__icon" src={logo} alt="логотип" />
            </Link>

            <h1 className="register__welcomeMessage">Добро пожаловать!</h1>

            <form className="register__form">
                <label className="register__label" for="name">Имя</label>
                <input className="register__input" type="text" required name="name" id="name" minLength="2" maxLength="30" />

                <label className="register__label" for="email">E-mail</label>
                <input className="register__input" type="email" required name="email" id="email" />

                <label className="register__label" for="password"> Пароль </label>
                <input className="register__input" type="password" required name="password" id="password" />
                <span className="register__input-error">Что-то пошло не так...</span>

                <button className="register__button" type="submit">Зарегистрироваться</button>
            </form>

            <p className="register__signin">Уже зарегистрированы?
                <Link to="signin" className="register__link"> Войти</Link>
            </p>
        </section>
    )
}

export default Register;