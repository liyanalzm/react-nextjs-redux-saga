// import {Link} from 'next-url-prettifier';
// import { Link, Router } from '../../../routes.js';
import Link from 'next/link'
import React from 'react'
import NoResults from '../../Errors/NoResults'
import SomethingWrong from '../../Errors/SomethingWrong'
export default function ({ movies, error }) {
  return (
    <ul>
      { !movies &&
        <SomethingWrong error= {error}/>
        || movies.length<=0 &&
        <NoResults />
        ||
        movies.map(({ show }) => (
        <li key={show.id}>
          <Link href={`/movieDetails/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))
      }
    </ul>
  )
}

export const mocktemplate = (
  <ul>
      <li>
          <a>mock</a>
      </li>
  </ul>
);