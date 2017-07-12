module.exports = (ctx, req) => {
  ctx.res = {
    status: 200,
    body: {
      hello: 'world1'
    }
  }

  ctx.done()
}
