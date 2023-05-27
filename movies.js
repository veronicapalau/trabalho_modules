const _ = require("lodash");

function listMovies(movies) {
  const sortedMovies = _.sortBy(movies);
  sortedMovies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
  });
}

module.exports = {
  listMovies,
};
