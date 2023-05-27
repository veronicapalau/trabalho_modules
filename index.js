// index.js
const colors = require('colors');
const movies = require('./movies');
const data = require('./data');

console.log(colors.yellow('Filmes do Senhor dos Anéis:'));
movies.listMovies(data.movies);

