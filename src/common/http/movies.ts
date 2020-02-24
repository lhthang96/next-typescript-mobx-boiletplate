import fetch from 'isomorphic-unfetch';
import { get } from 'lodash/fp';

export const searchMovies = async (query: string) => {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await res.json();

  return data.map(entry => get('show', entry));
}