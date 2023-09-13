import { BASE_URL } from "./constants.js";

export const handleRegister = (email, password, name) => {
    return fetch (`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password, name})
    })
    .then ((response) => {
            if (response.status === 201) {
                return response.json ();
            }
            return Promise.reject(response.status);
    })
    .then ((res) => {
        return res;
    })
}

export const handleLogin = (email, password) => {
    return fetch (`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then ((response) => {
        if (response.status === 200) {
            return response.json ();
        }
    })
    .then ((data) => {
        localStorage.setItem ('token', data.token);
        return data;
    })
}

export const getUser = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then ((response) => {
        if (response.status === 200) {
            return response.json ();
        }
    })
}