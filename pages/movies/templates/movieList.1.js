import Link from 'next/link'
import movies from './moviedetails.json'

 const mocktemplate = (
   
    <ul>
      {movies.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/movies/${show.id}`} href={`movies/movieDetails?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
export default mocktemplate;