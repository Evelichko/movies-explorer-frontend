import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form.js"
import logo from "../../images/logo.svg";
import "./Login.css";

function Login() {
    return (
        <section className="login">
            <Link to="/">
                <img className="login__logo" src={logo} alt="логотип" />
            </Link>

            <h1 className="login__welcomeMessage">Рады видеть!</h1>

            <Form>
                <label className="form__label" for="email">E-mail</label>
                <input className="form__input" type="email" required name="email" id="email" />
                <label className="form__label" for="password"> Пароль </label>
                <input className="form__input" type="password" required name="password" id="password" />
                <button className="form__button login__button" type="submit">Войти</button>

            </Form>


            <p className="login__signup">Ещё не зарегистрированы?
                <Link to="signup" className="login__link">Регистрация</Link>
            </p>
        </section>
    )
}

export default Login;