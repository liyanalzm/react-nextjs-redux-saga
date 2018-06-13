// TODO: split this object up into three: one for for routes with 1 param, 2params, and 3 params. Then change routing function to use the correct obj depending on the num of params
const routes = [
  { 
    page: '/Errors/NotFound'
  },
  { 
    path: '/movies',
    page: '/movies'
  },
  { 
    path: '/movies/list',
    page: '/movies/movieList'
  },
  { 
    path: '/movies/desc',
    page: '/movies/movieDetails'
  },
]

  module.exports = routes;