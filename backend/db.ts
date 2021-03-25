import log from './app/middleware/consoleMiddleware'
const mongo = require('mongoose')
import config from './config'

let url = `mongodb://${config.database.host}:${config.database.port}`

export default async function connectDB(func?: Function) {
  await mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
      if (err) {
        log('error', `Connection error: ${err}`)
        throw err
      }
      log('ok', 'Database connected')
      func()
  })
}
