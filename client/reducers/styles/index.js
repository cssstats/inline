module.exports = {
  name: 'styles',

  state: {
    data: []
  },

  set: (action, state) => {
    return { data: action.data }
  }
}
