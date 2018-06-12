import React from 'react'
import {connect} from 'react-redux'
import dynamic from 'next/dynamic'
import {template, mocktemplate} from './templates/movieList';
import { loadData } from './actions';

const MovieListDynamic = dynamic(
  import('./templates/movieList'),
  {
    loading: () => (mocktemplate),
    ssr: false 
  }
)


class MovieList extends React.Component {
  static async getInitialProps (props) {
    const { store, query } = props.ctx
    store.dispatch(loadData(query.id))
  }
  render() {
    const { movies, error, isFetching } = this.props;
    
    return (
      <div>
        <h1>
          Index Page 
        </h1>
        {!isFetching &&
          <MovieListDynamic movies={movies} error={error} />
          ||
          mocktemplate
        }
      </div>
    );
  }
}

export default connect(state => state)(MovieList);
