"use strict";

const numberOfFilm = +prompt("Кол-во фильмов","");

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

while( i < 2) {
    const film = prompt("Введите фильм","");
    const scoreFilm = +prompt("Введите его оценку","");

    if (film.length > 50 || film.length == 0 || film.length == null || scoreFilm == null || scoreFilm.length == 0) {
        i--;
    }
    else {
        personalMovieDB.movies[film] = scoreFilm;
    }

    i++;
}

if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
}   else if ( personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
}   else if ( personalMovieDB.count <= 10) {
        console.log("Просмотренно мало фильмов");
}   else {
    console.log("Error");
}

console.log(personalMovieDB.movies);