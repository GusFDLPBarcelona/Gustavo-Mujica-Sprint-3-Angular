

function getAllDirectors(movies) {

  let result = movies.map(movie => movie.director);

  console.log("Dierctores:", result);

  return result;
  
}

function getMoviesFromDirector(movies, directorName) {
  
  const moviesFromDirector = movies.filter(movie => movie.director === directorName);
  
  console.log("Películas del director", directorName, ":", moviesFromDirector);
  
  return moviesFromDirector;
}

function moviesAverageOfDirector(movies, director) {
  
  const directorMovies = movies.filter(movie => movie.director === director);

  if (directorMovies.length === 0) return 0; 

  const totalScores = directorMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScores / directorMovies.length;
  const roundedAverage = parseFloat(averageScore.toFixed(2));

  console.log(`El promedio de las películas dirigidas por ${director} es: ${roundedAverage}`);
  return roundedAverage;

}

function orderAlphabetically(movies) {
  const orderedMovies = [...movies]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);

  console.log('Ordered movies:', orderedMovies);
  return orderedMovies;
}

function orderByYear(movies) {

  const sortedMovies = [...movies].sort((a, b) => {
    if (a.year === b.year) {
      
      return a.title.localeCompare(b.title);
    } else {
     
      return a.year - b.year;
    }
  });

  console.log("Películas ordenadas por año:", sortedMovies);

  return sortedMovies;
}

function moviesAverageByCategory(array, genre) {
  let genreArray = array.filter(film => film.genre.includes(genre));
  if (genreArray.length === 0) {
    console.log('No movies found for genre:', genre);
    return 0;
  }
  
  let totalScore = genreArray.reduce((total, film) => total + film.score, 0);
  let averageScore = totalScore / genreArray.length;
  
  console.log('Average score for genre', genre, ':', parseFloat(averageScore.toFixed(2)));
  return parseFloat(averageScore.toFixed(2));
}

function hoursToMinutes(movies) {
  
  const convertedMovies = movies.map(movie => {
    const durationArray = movie.duration.split(' '); 
    let totalMinutes = 0;

    durationArray.forEach(time => {
      if (time.includes('h')) {
       
        totalMinutes += parseInt(time) * 60;

      } else if (time.includes('min')) {
        
        totalMinutes += parseInt(time);
      }
    });

    return { ...movie, duration: totalMinutes };
  });

  console.log("Movies with duration converted to minutes:", convertedMovies);

  return convertedMovies;
}

function bestFilmOfYear(movies, year) {
  const moviesOfYear = movies.filter(movie => movie.year === year);
  if (!moviesOfYear.length) {
    console.log('No movies found for year:', year);
    return [];
  }

  const bestScore = Math.max(...moviesOfYear.map(movie => movie.score));
  const bestMovies = moviesOfYear.filter(movie => movie.score === bestScore);

  console.log('Best movies of year', year, ':', bestMovies);
  return bestMovies;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
