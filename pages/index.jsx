import React from 'react'
import {connect} from 'react-redux'
import {increment, loadData} from './movies/actions'
import Movies from './movies'
import dynamic from 'next/dynamic'
import { log } from 'util';

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store } = props.ctx
    if (!store.getState().movies) {
      store.dispatch(loadData())
    }
  }

  componentDidMount () {
  }

  render () {
    const { movies, error } = this.props;
    return (
      <div>
        <Movies movies={movies} error={error} />
      </div>
    );
  }
}

export default connect(state => state)(Index)
