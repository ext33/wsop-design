import log from './src/middleware/consoleMiddlware'
const mongo = require('mongoose')
import config from './config'

let url = `mongodb://${config.database.host}:${config.database.port}`

export default function connectDB() {
  mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
      if (err) {
        log('error', `Connection error: ${err}`)
        throw err
      }
      log('ok', 'Database connected')
  })
}
