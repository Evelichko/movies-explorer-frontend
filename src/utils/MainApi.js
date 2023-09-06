import { BASE_URL } from "./constants.js";

class MainApi {
    constructor () {
        this.baseUrl = BASE_URL;
    }

    checkResponse (res)  {
        if (res.ok) {
            return res.json();
          }
        return Promise.reject(res.status);
    }

    getToken = (token) => {
        this.headers = {
            'Content-Type': 'application/json',
            'authorization' :  `Bearer ${token}`
        } 
    }

    getFilms () {
        return fetch (`${this.baseUrl}/movies`, { 
            method: 'GET',
            headers: this.headers,
        })
        .then((res)=>
            this.checkResponse (res)
        );
    }

    editUserInfo (info) {
        return fetch (`${this.baseUrl}/users/me`, { 
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(info)})
        .then((res)=>
            this.checkResponse (res)
         );
    }

    saveFilm (film) {
        return fetch (`${this.baseUrl}/movies`, { 
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(film)})
        .then((res)=>
            this.checkResponse(res)
        );
    }

    removeFilm (film, id) {
        const movieId = id
        return fetch (`${this.baseUrl}/movies/${movieId}`, { 
            method: 'DELETE',
            headers: this.headers,
            body: JSON.stringify(film)})
        .then((res)=>
            this.checkResponse (res)
        );
    }
}
const mainApi = new MainApi();
export default mainApi;