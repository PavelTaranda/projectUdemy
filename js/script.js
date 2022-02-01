"use strict";

let numberOfFilm;

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        numberOfFilm = +prompt("Кол-во фильмов","");
    
        while(numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
            numberOfFilm = +prompt("Кол-во фильмов","");
        }
        personalMovieDB.count = numberOfFilm;
    },

    rememberMyfilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
        }   else if ( personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        }   else if ( personalMovieDB.count <= 10) {
            console.log("Просмотренно мало фильмов");
        }   else {
        console.log("Error");
        }
    },

    showMyDB: function(hidden) {
        if ( !hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        let genresOfFilm;
        for (let q = 0; q < 3; q++) {
        genresOfFilm = prompt(`Ваш любимый жанр фильмов под номером ${q+1}?`, "");
        if ( genresOfFilm > 50 || genresOfFilm == null || genresOfFilm == "") {
            q--;
            }
        else {
            personalMovieDB.genres[q] = genresOfFilm;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - ${item}`);
        });
    },

    toggleVisibleMyDB: function(access) {
        if (access) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};


// personalMovieDB.start();
// personalMovieDB.rememberMyfilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.showMyDB(personalMovieDB.privat);


