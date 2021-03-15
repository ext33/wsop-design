import app from './src/app'
import connectDB from './db'

const port: number = 8001

connectDB()

app.listen(
    port,
    (err?: any) => {
        if(err) {
            return console.error(err)
        }

        return console.log(`Server is listening on ${port}`)
    }
)