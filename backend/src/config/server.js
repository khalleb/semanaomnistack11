
const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const { errors } = require('celebrate');
// const morgan = require('morgan');
const responseTime = require('response-time');
const debug = require('debug');
const config = require('./config');

const log = debug('bethehero:app')

app.set('json spaces', 2)
app.set('trust proxy', true)
app.disable('x-powered-by')
app.options('*', cors())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}))
app.use(compression())
app.use(responseTime())
app.use(bodyParser.urlencoded({ 'limit': '1024mb', 'extended': true }))
app.use(bodyParser.json({ limit: '1024mb' }))
app.use(errors())
//app.use(morgan(app.get('env') === 'production' ? 'combined' : 'dev'))


let server = http.createServer(app)
server.listen(config.httpPort, () => {
  log(`Server is running on port: ${config.httpPort}`)
})

module.exports = app;