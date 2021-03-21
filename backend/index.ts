import app from './src/app/app'
import connectDB from './db'
import log from './src/middleware/consoleMiddlware'
import config from './config'
import createStatsJob from './src/app/sheduleTasks/createDayStats'

// connecting db
connectDB(() => {
    
    createStatsJob()

    // start express server
    app.listen(
        config.server.port,
        config.server.host,
        (err?: any) => {
            if(err) {
                return log('error', err)
            }
            return log('ok', `Server started on ${config.server.host}:${config.server.port}`)
        }
    )
})

