import schedule from 'node-schedule'
import {getNowDate} from '../middleware/dateMiddleware'
import log from '../middleware/consoleMiddleware'
import * as models from '../models'

async function createTodayViews() {
    await new models.DayViewsStats({count: 0}).save()
    .then(() => {log('ok', "Today's views stats object created")})
    .catch((e) => {log('error', e)})
}

async function createTodayPosts() {
    await new models.DayPostsStats({count: 0}).save()
    .then(() => {log('ok', "Today's posts stats object created")})
    .catch((e) => {log('error', e)})
}

export default async function createStatsJob() {
    const todayDate = getNowDate()

    // check for existing today's views object
    await models.DayViewsStats.find({date: todayDate})
    .then((Stats: Array<any>) => {
        if(Stats.length == 0) {
            createTodayViews()
        } else {
            log('info', "Today's views object already exist")
        }
    })
    .catch((e) => {log('error', e)})

    // check for existing today's posts object
    await models.DayPostsStats.find({date: todayDate})
    .then((Stats: Array<any>) => {
        if(Stats.length == 0) {
            createTodayPosts()
        } else {
            log('info', "Today's posts object already exist")
        }
    })
    .catch((e) => {log('error', e)})
    

    // create task
    schedule.scheduleJob('0 0 * * *', async () => {
        log('info', "Stats shedule called...")
        await createTodayViews()
        await createTodayPosts()
    })
}