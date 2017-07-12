module.exports = (ctx, req) => {
  ctx.res = {
    status: 200,
    body: {
      hello: 'world2'
    }
  }

  ctx.done()
}
