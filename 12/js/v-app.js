'use strict';


const vm = new Vue({
  el: 'main',
  data: {
    min: 10,
    title: '',
    movies: [
      {
        name: 'Titanic',
        year: 1990,
        average: 7
      },
      {
        name: 'John Wick',
        year: 2000,
        average: 3
      },
      {
        name: 'Amanecer',
        year: 2010,
        average: 9
      },
      {
        name: 'Qué pasó ayer?',
        year: 2005,
        average: 5
      },
      {
        name: 'Noche de Terror',
        year: 2012,
        average: 8
      },
      {
        name: 'La Niñera',
        year: 2015,
        average: 6
      },
      {
        name: 'El Exorcista',
        year: 2017,
        average: 10
      }
    ]
  },
  computed: {
    averageMovieFilter() {
      return this.movies.filter(movie => movie.average >= this.min);
    },
    titleMovieSearch() {
      return this.movies.filter(movie => movie.name.toLowerCase().includes(this.title.toLowerCase()));
    }
  }
});
