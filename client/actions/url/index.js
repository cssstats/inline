const fetch = require('isomorphic-fetch')

module.exports = {
  name: 'url',

  retrieve: (action, state, dispatch) => {
    const url = `http://johno.in?url=${action.url}`

    fetch(url)
      .then(res => res.json())
      .then(data => dispatch('styles.reducers.set', { data }))
      .catch(e => console.log(e))

    dispatch('query.reducers.set', { url: action.url })
  }
}
