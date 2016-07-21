import { send } from 'micro-core'
import getInline from 'get-inline'
import getQueryParam from 'get-query-param'
import normalizeUrl from 'normalize-url'

export default async function (req, res) {
  const url = normalizeUrl(req.url.replace('/?url=', ''))
  const styles = await getInline(url)

  res.setHeader('Access-Control-Allow-Origin', '*')

  send(res, 200, styles)
}
