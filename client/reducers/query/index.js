const query = require('query-string')

module.exports = {
  name: 'query',

  state: {
    url: null
  },

  set: (action, state) => {
    const queryObj = { url: action.url }

    if (history && history.pushState) {
      history.pushState(queryObj, 'New url', `?${query.stringify(queryObj)}`)
    }

    return queryObj
  }
}
