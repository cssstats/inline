import test from 'ava'
import inlineApi from './'

test('inline-api does something awesome', t => {
  t.plan(1)

  t.true(inlineApi())
})
