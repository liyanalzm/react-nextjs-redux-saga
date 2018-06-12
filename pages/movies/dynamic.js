import React from 'react'
import {connect} from 'react-redux'
import {increment, loadData} from './actions'
import Link from 'next/link'
import movies1 from './templates/moviedetails.json'
import dynamic from 'next/dynamic'
import Template from './templates/movieList';
import mock from './templates/movieList.1';

const DynamicMovies = dynamic(import('./templates/movieList'))

const Movies = ({movies}) => {
    return (
      <div>
        <h1>
          Index Page 
        </h1>
        <Template />
        <DynamicMovies movies = {movies} />
    </div>
    );
}

export default Movies;
