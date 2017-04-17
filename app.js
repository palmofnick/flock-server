// deps
const Koa = require('koa')
const app = new Koa()

// response
app.use(ctx => { ctx.body = 'flock' })

// start
app.listen(3000)
