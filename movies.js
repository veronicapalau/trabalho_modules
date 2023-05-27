// movies.js
const _ = require('lodash');

// Função para listar os filmes em ordem alfabética
function listMovies(movies) {
  const sortedMovies = _.sortBy(movies);
  sortedMovies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
  });
}

// Exporta a função para uso em outros módulos
module.exports = {
  listMovies,
};
