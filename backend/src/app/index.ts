import express from 'express'
import bodyParser from 'body-parser'
import router from '../router/router'
var multer = require('multer');
var upload = multer();

const app = express()

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
app.use(bodyParser.json())

app.use(router)

export default app