import React from 'react';
import {connect} from 'react-redux';
import dynamic from 'next/dynamic';
import {template, mocktemplate} from './templates/movieList';
import { getSearchData, submitForm } from './actions';
// import {Link} from 'next-url-prettifier';
// import { Link, Router } from '../../routes.js';
import Link from 'next/link'
import Router from 'next/router'
import qs from 'qs';

class Movies extends React.Component {

  handleChange = (e) => {
    this.props.dispatch(getSearchData({value : e.target.value}));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/movies/${this.refs.search.value}`)
  }
  

  render() {

    const { searchData, count } = this.props;
    return (
      <div>
        <h1>
          Index Page 
        </h1>
          <p>Search: </p>
            <form onSubmit={this.handleSubmit}>
              <input 
              type="text" 
              onChange={this.handleChange}
              ref="search"
              /> 
              &nbsp;
              <input type="submit" value="Submit"/>
            </form>
      </div>
    )
  }
}

export default connect(state => state)(Movies);
