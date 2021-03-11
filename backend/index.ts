import express from 'express'
const router = require('./src/Router/router')

const app = express()
const port: number = 8000

app.use(router)
app.listen(
    port,
    (err?: any) => {
        if (err) {
            return console.error(err)
        }
        return console.log(`Server is listening on ${port}`)
    }
);