import { observable, action, reaction, computed } from 'mobx';
import { MovieItem } from '../../pages/movies/types';

export class MoviesStore {
  @observable moviesList: Array<MovieItem> = [];

  constructor() {
    reaction(
      () => this.moviesList,
      list => {
        alert(`There are ${list.length} movies in list ...`);
      }
    )
  }

  @computed
  get numberOfMovies(): number {
    return this.moviesList.length;
  }
  get moviesData(): Array<string> {
    return this.moviesList.map(item => item.name);
  }

  @action
  addMovies(movie: MovieItem) {
    this.moviesList.push(movie);
  }
}

export const moviesStore = new MoviesStore();
