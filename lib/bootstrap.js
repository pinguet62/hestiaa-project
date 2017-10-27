let dotenv = require('dotenv-safe')
let Database = require('./bootstrap/database')
let Middlewares = require('./bootstrap/middlewares')

/**
 * This class have the responsability of initializing the web application.
 */
class Bootstrap {
  /**
   * Prepares to initialize the application
   */
  static init () {
    dotenv.config({allowEmptyValues: true})
    Database.init()
  }

  /**
   * Serves the express application
   *
   * @param  {object} app Express instance
   * @return {http.server} Http server instance
   */
  static run (app) {
    Middlewares.init(app)

    app.disable('etag')

    return app.listen(process.env.PORT, function () {
      if (process.env.NODE_ENV !== 'testing') {
        console.log('Example app listening on port ' + process.env.PORT)
      }
    })
  }
}

module.exports = Bootstrap