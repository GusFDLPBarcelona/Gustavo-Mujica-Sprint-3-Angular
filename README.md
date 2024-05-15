En primer lugar está la explicación del sprint que ofrece IT Academy. 
Al terminar agrego en castellano los tips sobre los ejercicios y este repositorio.

# Sprint 3 IT Academy | Video management tool

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.

---------------------------------------------------------------------------------------

Este sprint nos introduce en el territorio de las comprobaciones por test. Usaremos Jest para monitorear las funciones y asegurarnos de que pasan las pruebas programadas. 

El ejercicio 6 tiene un adicional de dificultad, ya que para resolverlo debemos redactar el test, programar las pruebas que nuestra función debe superar. Al final de las explicaciones para cada función agregaré la explicación de como afrontar la creación del test. 

Ahora la breve explicación de las funciones que pasan los test: 

Nivel 1
 Ejercicio 1: Conseguir un array con los directores de todas las películas. Lo hago utilizando el método map, que crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array "movies". En este caso, la función proporcionada es flecha: (movie => movie.director), que devuelve el director de cada película.

 Ejercicio 2: Conseguir un array con las películas de un director en paticular. crea un nuevo array moviesFromDirector que contiene solo las películas dirigidas por el director especificado. Lo hace utilizando el método filter, que crea un nuevo array con los elementos filtrados. Devuelve el array moviesFromDirector que contiene las películas del director especificado.

 Ejercicio 3: Para este ejercicio vamos a calcular el promedio de las puntuaciones de las películas de un director específico. Luego de sumar el total de las puntuaciones, se divide por la cantidad de películas. Al resultado lo redondeamos a dos decimales. Agregamos una comprobación para devolver 0 si el director no tiene películas..

 Ejercicio 4:  Con este ejercicio vamos a ordenar las películas alfabéticamente. Para ello, primero clonamos usando el método spread, ordenamos las películas por título y luego extraemos solo los títulos de las películas ordenadas. Finalmente, tomamos solo los primeros 20 títulos ordenados alfabéticamente. 

 Ejercicio 5: La función orderByYear toma un array de películas y devuelve un nuevo array con las películas ordenadas por año de lanzamiento. Si dos películas se lanzaron en el mismo año, se ordenan alfabéticamente por título. Primero, la función crea una copia del array original para evitar modificarlo. Luego, utiliza el método sort para ordenar las películas. Si el año de lanzamiento de dos películas es el mismo, utiliza el método localeCompare para ordenarlas alfabéticamente por título. Si los años de lanzamiento son diferentes, simplemente resta los años para determinar el orden. Finalmente, la función imprime el array ordenado y lo devuelve.

 Ejercicio 6: La función moviesAverageByCategory toma un array de películas y un género, y calcula la puntuación media de las películas de ese género. Primero, la función filtra las películas que pertenecen al género especificado. Si no hay películas de ese género, imprime un mensaje en la consola y devuelve 0. Luego, la función calcula la puntuación total de las películas del género utilizando el método reduce. Divide esta puntuación total por el número de películas para obtener la puntuación media. Finalmente, la función imprime la puntuación media (redondeada a dos decimales) y la devuelve.

Nivel 2
 Ejercicio 7: Transformar la duración de las películas de horas a minutos. Separamos la duración en horas y minutos, convertimos las horas a minutos y sumamos los minutos adicionales. Usamos "spread" para clonar el array de películas y no modificar el original. Devolvemos un nuevo array con las películas con la duración convertida a minutos.

Nivel 3
 EJERCICIO 8: Conseguir la mejor película de un año en particular.
 Filtramos las películas por año.Si no hay películas en ese año, devolvemos un array vacío.Luego, obtenemos la mejor puntuación de ese año y filtramos las películas por la mejor puntuación.

 Explicación breve del test del ejercicio 6 del Nivel 1

 La primera prueba verifica que moviesAverageByCategory esté declarada y sea una función. La segunda prueba verifica que la función devuelva un número cuando se le proporciona un array de películas y un género. La tercera prueba verifica que la función no devuelva NaN (Not a Number). La última prueba verifica que la función devuelva la puntuación media de las películas del género especificado, y también verifica que este valor no sea NaN.

 Anexo: Al ejecutar el npm run test:watch se crea el archivo test-results.html. Éste es clave para seguir de manera gráfica y fuera del terminal los progresos en los test mostrando en verde (passed) los resueltos y en rojo (not passed) los que no pasan aún el test. Cada función contiene varias comprobaciones por lo que en una misma función podemos encontrar "passed" y "not passed" tests. 

 Para ver los resultados de mi sprint haz click en el archivo test-results.html.