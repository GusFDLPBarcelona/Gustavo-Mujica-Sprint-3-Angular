// Ejercicio 1: Get the array of all directors.

function getAllDirectors(array) {

  let result = array.map(movie => movie.director);

  console.log("EXERCICE 1 ->", result);

  return result;

}

// Ejercicio 2: Filtrar las películas por el nombre del director utilizando filter.
function getMoviesFromDirector(movies, directorName) {
  
  const moviesFromDirector = movies.filter(movie => movie.director === directorName);
  
  console.log("Movies from director", directorName, ":", moviesFromDirector);
  
  return moviesFromDirector;
}

// Ejercicio 3: Para este ejercicio vamos a calcular el promedio de las puntuaciones de las películas de un director específico. Luego de sumar el total de las puntuaciones, se divide por la cantidad de películas. Al resultado lo redondea,os a dos decimales.

function moviesAverageOfDirector(movies, director) {
  
  const directorMovies = movies.filter(movie => movie.director === director);
 
  const totalScores = directorMovies.reduce((acc, movie) => acc + movie.score, 0);

  const averageScore = totalScores / directorMovies.length;

  const roundedAverage = parseFloat(averageScore.toFixed(2));

  console.log(`El promedio de las películas dirigidas por ${director} es: ${roundedAverage}`);

  return roundedAverage;
}


// Ejercicio 4:  Con este ejercicio vamos a ordenar las películas alfabéticamente. Para ello, primero ordenamos las películas por título y luego extraemos solo los títulos de las películas ordenadas. Finalmente, tomamos solo los primeros 20 títulos ordenados alfabéticamente. 

function orderAlphabetically(movies) {
 
  const sortedMovies = movies
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title);   

  const top20Movies = sortedMovies.slice(0, 20);

  console.log("Top 20 películas ordenadas alfabéticamente:", top20Movies );  
  
  return top20Movies;
}
module.exports = { orderAlphabetically };


// Ejercicio 5: Al ordenar las películas por año, si dos películas tienen el mismo año, se ordenarán por título. Y si son diferentes se ordenan por año.

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

module.exports = { orderByYear };


// Ejercicio 6: Transformar la duración de las películas de horas a minutos. Separamos la duración en horas y minutos, convertimos las horas a minutos y sumamos los minutos adicionales. Finalmente, devolvemos la película con la duración convertida a minutos.

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

    return { ...movie, duration: totalMinutes }; // Devolver la película con la duración convertida a minutos
  });

  console.log("Movies with duration converted to minutes:", convertedMovies);

  return convertedMovies;
}

module.exports = { hoursToMinutes };


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
