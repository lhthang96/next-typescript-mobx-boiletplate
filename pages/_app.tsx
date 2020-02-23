import { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import { MoviesStore } from '../store/movies';

const moviesStore = new MoviesStore();

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider moviesStore={moviesStore} >
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;