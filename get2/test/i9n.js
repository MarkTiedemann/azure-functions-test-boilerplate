const { test, call } = require('../../test')

test(t =>
  call('get2').then(res =>
    t.deepEqual(res, {
      hello: 'world2'
    })
  )
)
