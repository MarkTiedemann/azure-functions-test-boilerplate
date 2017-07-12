const { test, call } = require('../../test')

test(t =>
  call('get1').then(res =>
    t.deepEqual(res, {
      hello: 'world1'
    })
  )
)
