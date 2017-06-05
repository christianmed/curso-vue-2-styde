'use strict';

Vue.filter('reverseText', text => text.split('').reverse().join(''));

const vm = new Vue({
  el: 'main',
  data: {
    min: 0,
    search1: '',
    search2: '',
    movies: [
      {
        name: 'Pelicula 1',
        year: 1990,
        average: 7
      },
      {
        name: 'Pelicula 2',
        year: 2000,
        average: 3
      },
      {
        name: 'Pelicula 3',
        year: 2010,
        average: 9
      },
      {
        name: 'Pelicula 4',
        year: 2005,
        average: 5
      },
      {
        name: 'Pelicula 5',
        year: 2012,
        average: 8
      },
      {
        name: 'Pelicula 6',
        year: 2015,
        average: 6
      },
      {
        name: 'Pelicula 7',
        year: 2017,
        average: 10
      }
    ]
  },
  computed: {
    averageFilter() {
      return this.movies.filter(movie => movie.average >= this.min);
    },
    searchMovie1() {
      return this.movies.filter(movie => movie.name.includes(this.search1));
    },
    searchMovie2() {
      return this.movies.filter(movie => movie.name.includes(this.search2));
    }
  }
});
