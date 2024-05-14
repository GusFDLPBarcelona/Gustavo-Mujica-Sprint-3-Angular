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
  const orderedMovies = [...movies]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);

  console.log('Ordered movies:', orderedMovies);
  return orderedMovies;
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


// EEjercicio 6: Calcular el promedio de duración de las películas de por categoría. Primero filtramos las películas por categoría. Luego, si no hay películas en alguna categoría, la función devuelve  0. Calculamos la suma total de las duraciones de las películas y luego el promedio de duración. Finalmente, devolvemos el promedio redondeado a dos decimales.

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

// Ejercicio 7: Transformar la duración de las películas de horas a minutos. Separamos la duración en horas y minutos, convertimos las horas a minutos y sumamos los minutos adicionales. 

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

// Exercise 8: Conseguir la mejor película de un año en particular.
//Filtramos las películas por año.Si no hay películas en ese año, devolvemos un array vacío.Luego, obtenemos la mejor puntuación de ese año y filtramos las películas por la mejor puntuación.

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
