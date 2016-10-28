const { send } = require('micro')
const cssstats = require('cssstats')
const getInline = require('get-inline')
const getQueryParam = require('get-query-param')
const normalizeUrl = require('normalize-url')

module.exports = async function (req, res) {
  try {
    const url = normalizeUrl(req.url.replace('/?url=', ''))
    const styles = await getInline(url)

    const stats = cssstats(styles.map(style => `${style.tag} { ${style.style} }`).join(''))

    res.setHeader('Access-Control-Allow-Origin', '*')

    send(res, 200, stats)
  } catch (e) {
    send(res, 422)
  }
}
