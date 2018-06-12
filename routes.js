// TODO: split this object up into three: one for for routes with 1 param, 2params, and 3 params. Then change routing function to use the correct obj depending on the num of params
export const translationObj = {
    movies: { page: '/movies', type: 'movies'},
    movielist: { page: '/movies/movieList', id: { default: '' } },
    // movieDetails: { page: '/movies/movieList', id: { id: ':id' }},
  }