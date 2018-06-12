import React from 'react'
import {connect} from 'react-redux'
import {increment, getData} from './actions'
import NoResults from '../Errors/NoResults'
import SomethingWrong from '../Errors/SomethingWrong'
import dynamic from 'next/dynamic'

const DynamicMovieDetails = dynamic(
    import('./templates/movieDetails'),
    {
      loading: () => (<p>Loading...</p>),
      ssr: false 
    }
  )

class MovieDetails extends React.Component {
  static async getInitialProps (props) {
    const { store, query } = props.ctx
    store.dispatch(getData(query.id))
  }
 
  render () {
    const { show, isFetching, error, searchData } = this.props;
    return (
        <div>
            <h1>Movie Details</h1>
                {!isFetching &&
                    <DynamicMovieDetails show={show} error={error} />
                    ||
                <p>Loading...</p>
                }
        </div>
    );
  }
}

export default connect(state => state)(MovieDetails)
