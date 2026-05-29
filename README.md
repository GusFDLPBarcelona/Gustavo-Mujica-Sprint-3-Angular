# Sprint 3 — Films Database

Base de datos de 250 películas con funciones de búsqueda, ordenación y análisis estadístico implementadas en JavaScript puro.

## Funcionalidades

| # | Función | Descripción |
|---|---------|-------------|
| 1 | `getAllDirectors(movies)` | Devuelve la lista de todos los directores de la colección |
| 2 | `getMoviesFromDirector(movies, name)` | Filtra las películas de un director concreto |
| 3 | `moviesAverageOfDirector(movies, director)` | Calcula la puntuación media de un director |
| 4 | `orderAlphabetically(movies)` | Devuelve los 20 primeros títulos ordenados alfabéticamente |
| 5 | `orderByYear(movies)` | Ordena la colección por año; en caso de empate, alfabéticamente |
| 6 | `moviesAverageByCategory(movies, genre)` | Calcula la puntuación media de un género |
| 7 | `hoursToMinutes(movies)` | Convierte el campo `duration` de formato `"2h 22min"` a minutos enteros |
| 8 | `bestFilmOfYear(movies, year)` | Devuelve la(s) película(s) con mayor puntuación de un año dado |

## Estructura

```
src/
├── data.js      # Array con 250 películas (título, año, director, duración, género, puntuación)
├── films.js     # Implementación de las 8 funciones
└── index.html   # Interfaz mínima para probar desde el navegador
tests/
└── films.spec.js  # 40 tests Jest (todos pasando ✅)
```

## Tests

```bash
npm install
npm test
```

40 tests — 40 pasando.

## Cómo usar en el navegador

1. Abre `src/index.html` en el navegador
2. Pulsa **Directores** para ver la lista completa en la consola
3. Escribe un nombre de director y pulsa **Películas de un director**
4. Abre la consola del navegador (F12) para ver los resultados

## Tecnologías

![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)

## Qué demuestra este proyecto

- **Métodos funcionales de array**: `map`, `filter`, `reduce`, `sort`, `slice`, spread operator
- **Transformación de datos**: conversión de strings de duración a minutos con `split` e iteración
- **Ordenación compleja**: criterio múltiple con `localeCompare` para empates
- **Estadística básica**: promedios por director y por categoría con manejo del caso vacío
- **Testing con Jest**: 40 tests unitarios que cubren casos normales y de borde

## Autor

**Gustavo Mujica** — [GitHub](https://github.com/GusFDLPBarcelona)
