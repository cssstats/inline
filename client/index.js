const naka = require('naka')
const app = naka()

// Register actions and reducers
app.register(require('./actions/url'), 'action')
app.register(require('./reducers/query'), 'reducer')
app.register(require('./reducers/styles'), 'reducer')

// Register routes
app.router(route => [
  route('/', require('./containers/app'))
])

// Start the app
app.init()
