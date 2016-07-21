const fetch = require('isomorphic-fetch')

module.exports = {
  name: 'url',

  retrieve: (action, state, dispatch) => {
    const url = `http://localhost:3000?url=${action.url}`
    console.log(url)
    console.log(action)

    fetch(url)
      .then(res => res.json())
      .then(data => dispatch('styles.reducers.set', { data }))
      .catch(e => console.log(e))

    dispatch('query.reducers.set', { query: url })
  }
}
