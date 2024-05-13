// Ejercicio 1: Conseguir un array con los directores de todas las películas utilizando map. 

function getAllDirectors(movies) {

  let result = movies.map(movie => movie.director);

  console.log("Dierctores:", result);

  return result;
  
}

// Ejercicio 2: Conseguir un array con las películas de un director en paticular utilizando filter.

function getMoviesFromDirector(movies, directorName) {
  
  const moviesFromDirector = movies.filter(movie => movie.director === directorName);
  
  console.log("Películas del director", directorName, ":", moviesFromDirector);
  
  return moviesFromDirector;
}

// Ejercicio 3: Para este ejercicio vamos a calcular el promedio de las puntuaciones de las películas de un director específico. Luego de sumar el total de las puntuaciones, se divide por la cantidad de películas. Al resultado lo redondeamos a dos decimales. Agregamos una comprobación para devolver 0 si el director no tiene películas..

function moviesAverageOfDirector(movies, director) {
  
  const directorMovies = movies.filter(movie => movie.director === director);

  if (directorMovies.length === 0) return 0; 

  const totalScores = directorMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScores / directorMovies.length;
  const roundedAverage = parseFloat(averageScore.toFixed(2));

  console.log(`El promedio de las películas dirigidas por ${director} es: ${roundedAverage}`);
  return roundedAverage;

}


// Ejercicio 4:  Con este ejercicio vamos a ordenar las películas alfabéticamente. Para ello, primero clonamos usando el método spread, ordenamos las películas por título y luego extraemos solo los títulos de las películas ordenadas. Finalmente, tomamos solo los primeros 20 títulos ordenados alfabéticamente. 

function orderAlphabetically(movies) {

  return [...movies]
        
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);
}


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



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

} 






// Ejercicio 7: Transformar la duración de las películas de horas a minutos. Separamos la duración en horas y minutos, convertimos las horas a minutos y sumamos los minutos adicionales. Finalmente, devolvemos la película con la duración convertida a minutos.

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
