import express from 'express'
import bodyParser from 'body-parser'
import connect from './db'
import router from './src/Router/router'
var multer = require('multer');
var upload = multer();

let db
const app = express()
const port: number = 8000

db = connect()

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
app.use(bodyParser.json())

app.use(router)
app.listen(
    port,
    (err?: any) => {
        if(err) {
            return console.error(err)
        }

        return console.log(`Server is listening on ${port}`)
    }
)


export {db}