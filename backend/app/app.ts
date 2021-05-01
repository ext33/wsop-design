import express from 'express'
import router from '../router'
import cors from 'cors'
import fileMiddlware from './middleware/fileMiddleware'

declare module 'express' {
    interface Request {
        body: any // Actually should be something like `multer.Body`
        files: any // Actually should be something like `multer.Files`
    }
}

const app = express()

app.use(cors({credentials: true}))

app.use(fileMiddlware.single('image'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

app.use(router)

export default app