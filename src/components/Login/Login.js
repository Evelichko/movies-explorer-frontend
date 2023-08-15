import React from "react";
import { Link } from "react-router-dom";
// import Form from "../Form/Form.js"
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
    return (
        <section className="login">
            <Link to="/">
                <img className="login__logo" src={logo} alt="логотип" />
            </Link>

            <h1 className="login__welcomeMessage">Рады видеть!</h1>

            <form className="login__form">

                <label className="login__label" for="email">E-mail</label>
                <input className="login__input" type="email" required name="email" id="email" />
                <label className="login__label" for="password"> Пароль </label>
                <input className="login__input" type="password" required name="password" id="password" />
                <button className="login__button" type="submit">Войти</button>

            </form>

            <p className="login__signup">Ещё не зарегистрированы?
                <Link to="signup" className="login__link">Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;