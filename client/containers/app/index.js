const h = require('naka').html

module.exports = (params, state, dispatch) => {
  console.log(state)
  const { data } = state.styles

  return h`
    <div>
      <header class="pa1 pa2-ns bb b--black-10 cf">
        <div class="fl-ns pv3 pl2">
          <a href="/" class="link black dim b ma0 pl2 pv3">Inline</a>
        </div>
        <div class="fl-ns w-50-ns">
          <form onsubmit=${e => {
            dispatch('url.actions.retrieve', {
              url: e.target.children[1].value
            })

            e.preventDefault()
          }}>
            <label for="url" class="dn">Url</label>
            <input class="w-100 mt2 br0 ba b--black-10 pa2" id="url" placeholder="google.com" />
          </form>
        </div>
      </header>
      <ul class="list">
        ${data.map(s => h`
          <li class="pa3 bb b--light-gray">
            <h3>${s.tag}</h3>
            <p class="mid-gray">${s.style}</p>
          </li>
        `)}
      </ul>
    </div>
  `
}
