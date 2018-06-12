const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// TODO: split this object up into three: one for for routes with 1 param, 2params, and 3 params. Then change routing function to use the correct obj depending on the num of params
const translationObj = {
  movies: { page: '/movies', type: 'movies'},
  movielist: { page: '/movies/movieList', id: { default: '' } },
  // movieDetails: { page: '/movies/movieList', id: { id: ':id' }},
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: dev ? 5 : 1000 * 60 * 60 // 1hour
})

app.prepare().then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => renderAndCache(req, res, '/'))

  server.get('/:first/:second?/:third?', (req, res, next) => {
    const firstParam = req.params.first ? req.params.first.toLowerCase() : null
    const secondParam = req.params.second
      ? req.params.second.toLowerCase()
      : null
    const thirdParam = req.params.third ? req.params.third.toLowerCase() : null
    // Prevent routes that should not be handled by this logic and send them to the next route in line
    if (
      firstParam !== '_next' &&
      firstParam !== 'robots.txt' &&
      firstParam !== 'service-worker.js' &&
      firstParam !== 'favicon.ico' &&
      firstParam !== 'static' &&
      firstParam !== 'json'
    ) {
      // initialize variables
      let page = '/page'
      let type = `${firstParam}Pages`
      let subtype = null
      let id = null
      if (Object.values(req.params).filter(Boolean).length === 1) {
        // Logic for routes with 1 parameter
        console.log('one parameter')
        // Set up default values for routes with 1 parameter
        page = '/page'
        type = `${firstParam}Pages`
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              page = translationObj[firstParam].page.default
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              type = translationObj[firstParam].type.default
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            if (translationObj[firstParam].id.default) {
              id = translationObj[firstParam].id.default
            }
          }
        }
      } else if (Object.values(req.params).filter(Boolean).length === 2) {
        // Logic for routes with 2 parameters
        console.log('two parameters')
        // Set up default values for routes with 2 parameters
        page = '/page'
        type = `${firstParam}Pages`
        id = secondParam
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              if (translationObj[firstParam].page[id]) {
                page = translationObj[firstParam].page[id]
              } else if (translationObj[firstParam].page.standard) {
                page = translationObj[firstParam].page.standard
              } else {
                page = translationObj[firstParam].page.default
              }
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              if (translationObj[firstParam].type[id]) {
                type = translationObj[firstParam].type[id]
              } else if (translationObj[firstParam].type.standard) {
                type = translationObj[firstParam].type.standard
              } else {
                type = translationObj[firstParam].type.default
              }
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            // Check to see if the item has an id array
            if (typeof translationObj[firstParam].id === 'object') {
              // If secondParam exists as key in id array
              if (translationObj[firstParam].id[secondParam]) {
                // Use value of secondParam key as id
                id = translationObj[firstParam].id[secondParam]
              } else if (translationObj[firstParam].id.standard) {
                // Check that standard exists as a key in id array
                // Use standard value as id
                id = translationObj[firstParam].id.standard
              } else {
                // If no standard, then use second param as id
                id = secondParam
              }
              // If no id array exists, use the id string as the id
            } else {
              id = translationObj[firstParam].id
            }
          }
        }
      } else if (Object.values(req.params).filter(Boolean).length === 3) {
        // Logic for routes with 3 parameters
        console.log('three parameters')
        // Set up default values for routes with 3 parameters
        page = '/page'
        type = `${firstParam}Pages`
        subtype = secondParam
        id = thirdParam
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              if (translationObj[firstParam].page[id]) {
                page = translationObj[firstParam].page[id]
              } else if (translationObj[firstParam].page.thirdly) {
                page = translationObj[firstParam].page.thirdly
              } else {
                page = translationObj[firstParam].page.default
              }
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              if (translationObj[firstParam].type[id]) {
                type = translationObj[firstParam].type[id]
              } else if (translationObj[firstParam].type.thirdly) {
                type = translationObj[firstParam].type.thirdly
              } else {
                type = translationObj[firstParam].type.default
              }
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            // Check to see if the item has an id array
            if (typeof translationObj[firstParam].id === 'object') {
              // If secondParam exists as key in id array
              if (translationObj[firstParam].id[secondParam]) {
                // Use value of secondParam key as id
                id = translationObj[firstParam].id[secondParam]
              } else if (translationObj[firstParam].id.thirdly) {
                // Check that thirdly exists as a key in id array
                // Use thirdly value as id
                id = translationObj[firstParam].id.thirdly
              } else {
                // If no thirdly, then use second param as id
                id = secondParam
              }
              // If no id array exists, use the id string as the id
            } else {
              id = translationObj[firstParam].id
            }
          }
        }
      }
      return renderAndCache(req, res, page, { id, type, subtype })
    }
    return next()
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

// const express = require('express')
// const next = require('next')

// // Set dev to true if not production
// const dev = process.env.NODE_ENV !== 'production'
// // Tell next whether to run in dev mode
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
// .then(() => {
//   const server = express()

//   server.get('/', (req, res) => {
//     const pathname = '/movies'
//     app.render(req, res, pathname, req.query)
//   })

//   server.get('/movies/:id', (req, res) => {
//     const pathname = '/movies/movieList'
//     const queryParams = { id: req.params.id }
//     app.render(req, res, pathname, queryParams)
//   })

//   server.get('/movieDetails/:id', (req, res) => {
//     const pathname = '/movies/movieDetails'
//     const queryParams = { id: req.params.id }
//     app.render(req, res, pathname, queryParams)
//   })

//   server.get('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })

// // server.js
// const express = require('express');
// const next = require('next');
// const Router = require('./routes').Router;

// const dev = process.env.NODE_ENV !== 'production';
// const port = parseInt(process.env.PORT, 10) || 3000;
// const app = next({dev});
// const handle = app.getRequestHandler();

// app.prepare()
//   .then(() => {
//     const server = express();

//     Router.forEachPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
//       app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
//     ));

//     server.get('*', (req, res) => handle(req, res));
//     server.listen(port);
//   })
// ;

// // server.js
// const next = require('next')
// // With express
// const express = require('express')
// const routes = require('./routes')
// const app = next({dev: process.env.NODE_ENV !== 'production'})
// const handler = routes.getRequestHandler(app)


// app.prepare().then(() => {
  
//   const server = express();

//   // create router from express
//   const router = express.Router();

//   server.get('/p', (req, res) => {
//     app.render(req, res, '/movies/mock', req.query);
//   });

//   server.use('/mocks', express.static(__dirname + '/mocks'));
  
//   server.use(handler)
  
//   server.use((req, res, next) => {
//     if(res.status === 404){
//       return app.render(req, res, '/Errors/NotFound', req.query);
//     }
//   })
  
//   server.listen(3000)
// })
