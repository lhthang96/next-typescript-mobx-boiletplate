import { useState, useRef } from 'react';
import { NextPage } from 'next';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';

import { MoviesStore } from '../../store/movies';
import { MovieItem } from './types';
import * as moviesApi from '../../common/http/movies';

import { Card, Col, Input, Row, Spin, Button } from 'antd';
import LandingLayout from '../../containers/LandingLayout';

const { Meta } = Card;
const DefaultImageUrl = "https://ci5.googleusercontent.com/proxy/kHgL543wKoBsxAOA1xAefBIZzsk0W2mq9Jz--x1UG8cY_dHuSOHQjxVRydCtQClUyUTAjxttjvmke9EuRsNuRpJ26n0dgrQDh1q8endwztBq0ZjHvxiHApoVlPafogrIV_3c78OSjt5kT4VcKtfRv0NCmMTEGw=s0-d-e1-ft#https://mcusercontent.com/bfbd29faaf4c5a50d776a6c40/images/e0a8a7ac-9b70-4481-a0ab-dd55419adff4.png"

interface Props {
  movies: Array<MovieItem>;
  moviesStore?: MoviesStore;
}

const MoviesPage: NextPage<Props> = ({ movies, moviesStore }) => {
  const searchInput = useRef(null);
  const [loading, setLoading] = useState(false);
  const [ moviesList, setMoviesList ] = useState(movies);

  const MOCK_MOVIES: MovieItem = {
    id: 'mock-movies',
    name: 'Mock movies - A movie with nonsense',
  }

  const onAddMovies = (): void => {
    moviesStore.addMovies(MOCK_MOVIES);
  }

  const logMoviesStore = (): void => {
    console.log('MOVIES LIST : ', moviesStore.moviesData);
    console.log('CURRENT NUMBER OF MOVIES', moviesStore.numberOfMovies);
  }

  const onSearchMovies = async () => {
    setLoading(true);
    const movies = await moviesApi.searchMovies(searchInput.current.input.value);
    setLoading(false);
    setMoviesList(movies);
  }

  const renderMoviesList = (): JSX.Element | Array<JSX.Element> => {
    return moviesList.length > 0
      ? moviesList.map(movie => {
        const movieSummary = _.replace(movie.summary, /<[/]?[pb]>/g, '');
        return (
          <Col key={movie.id} span={8} >
          <Card
            hoverable
            cover={<img alt="example" src={movie.image?.medium || DefaultImageUrl } />}
            style={{
              width: 240,
              height: 600,
              marginBottom: 24,
              overflow: 'hidden',
            }}
          >
            <Meta title={movie.name || 'No name given'} description={movieSummary || 'No summary info'} />
          </Card>
          </Col>
        )
      })  
      : <p>No Movies found</p>
  }

  const renderMoviesListContent = (): JSX.Element | Array<JSX.Element> => {
    return loading
      ? (
        <Col
          span={24}
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '24px 0 36px',
          }} >
          <Spin size="large" />
        </Col>
      )
      : renderMoviesList();
  }

  return (
    <LandingLayout path="home/movies" title="Movies" >
      <p>Movies page</p>
      <Button onClick={onAddMovies} style={{margin: '16px 16px 16px 0'}} type="primary">+ New</Button>
      <Button onClick={logMoviesStore} style={{margin: '16px 16px 16px 0'}}>Log</Button>
      <Input
        ref={searchInput}
        required
        placeholder="Input movie name and press 'Enter' to search ..."
        onPressEnter={onSearchMovies}
        style={{marginBottom: '24px'}} />
      <Row className="movies-list">
        { renderMoviesListContent() }
      </Row>
    </LandingLayout>
  )
}

MoviesPage.getInitialProps = async () => {
  const initMovies = await moviesApi.searchMovies('sherlock');

  return {
    movies: initMovies,
  }
}

export default inject('moviesStore')(observer(MoviesPage));