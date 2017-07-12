const test = require('ava')
const func = require('../')

test(t => {
  t.plan(2)

  // arrange
  const ctx = {
    done: () => t.pass()
  }
  const req = {}

  // act
  func(ctx, req)

  // assert
  t.deepEqual(ctx.res, {
    status: 200,
    body: {
      hello: 'world2'
    }
  })
})
