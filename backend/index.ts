import app from './src/app'
import connectDB from './db'
import log from './src/middleware/consoleMiddlware'

const port: number = 8001

connectDB()

app.listen(
    port,
    (err?: any) => {
        if(err) {
            return log('error', err)
        }
        return log('ok', `Server started on port ${port}`)
    }
)