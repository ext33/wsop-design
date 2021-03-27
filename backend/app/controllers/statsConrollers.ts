import * as models from '../models'
import {getNowDate} from '../middleware/dateMiddleware'


export async function getViewsStats() {
    return new Promise((resolve, reject) => {
        models.DayViewsStats.find()
        .then((stats) => {
            resolve({status: 200, stats: stats})
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function getPostsStats() {
    return new Promise((resolve, reject) => {
        models.DayPostsStats.find()
        .then((stats) => {
            resolve({status: 200, stats: stats})
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function addStatsView() {
    return new Promise((resolve, reject) => {
        const views: any = models.DayViewsStats.find({date: getNowDate()})
        .then(() => {
            models.DayViewsStats.updateOne({date: views.date}, {viewsCount: views.viewsCount + 1})
            .then(() => {
                resolve({status: 200})
            })
            .catch(e => reject({status: 500, error: e}))
        })
        .catch((e) => reject({status: 500, error: e}))
    })
}

export async function addStatsPost() {
    return new Promise((resolve, reject) => {
        const posts: any = models.DayPostsStats.find({date: getNowDate()})
        .then(() => {
            models.DayViewsStats.updateOne({date: posts.date}, {postsCount: posts.postsCount + 1})
            .then(() => {
                resolve({status: 200})
            })
            .catch(e => reject({status: 500, error: e}))
        })
        .catch((e) => reject({status: 500, error: e}))
    })
}