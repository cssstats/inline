const { send } = require('micro')
const getInline = require('get-inline')
const getQueryParam = require('get-query-param')
const normalizeUrl = require('normalize-url')

module.exports = async function (req, res) {
  try {
    const url = normalizeUrl(req.url.replace('/?url=', ''))
    const styles = await getInline(url)

    res.setHeader('Access-Control-Allow-Origin', '*')

    send(res, 200, styles)
  } catch (e) {
    send(res, 422)
  }
}
