const routes = module.exports = require('next-routes')()

routes
.add('search', '/', '/movies/index')
.add('movies', '/movies', '/movies/movieList')
.add('movieDetails', '/movieDetails/:id', '/movies/movieDetails')

////////////////////////////////////////////////////////////
//Source: https://github.com/BDav24/next-url-prettifier
////////////////////////////////////////////////////////////
// const UrlPrettifier = require('next-url-prettifier').default;

// const routes = [
//   {
//     page: 'index',
//     prettyUrl: '/'
//   },
//   {
//     page: 'movies/movieList',
//     prettyUrl: '/movies'
//   },
//   {
//     page: 'movies/movieDetails',
//     prettyUrl: '/movieDetails/:id'
//   }
// ];

// const urlPrettifier = new UrlPrettifier(routes);
// exports.default = routes;
// exports.Router = urlPrettifier;