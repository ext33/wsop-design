const mongo = require('mongoose')

const MONGO_USERNAME: string = 'admin'
const MONGO_PASSWORD: string = 'your_password'
const MONGO_HOSTNAME: string = 'localhost'
const MONGO_PORT: string = '27017'
const MONGO_DB: string = 'wsop'

let url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}`
// let url: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

async function connectDB() {
  await mongo.connect(url, {useNewUrlParser: true}, (err) => {
      if (err) {
        console.log('Connection error: ', err)
        throw err
      }

      console.log('Connected')
  })
}

export default connectDB