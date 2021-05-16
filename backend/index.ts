import app from './app/app'
import connectDB from './db'
import log from './app/middleware/consoleMiddleware'
import config from './config'
import createStatsJob from './app/sheduleTasks/createDayStats'
import createSuperUser from './app/sheduleTasks/createAdminUser'

// connecting db
connectDB(() => {
    
    // create stats objects
    createStatsJob()

    // create superuser
    createSuperUser(config.administration)

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

