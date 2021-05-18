import * as models from '../models'
import {getNowDate} from '../middleware/dateMiddleware'


async function fetchPostsStats() {
    return new Promise((resolve, reject) => {
        models.DayPostsStats.find()
        .then((stats: any) => {
            try {
                let data = {
                    allPosts: 0,
                    daysPosts: [],
                    error: null
                }
                stats.forEach(element => {
                    data.allPosts += element.postsCount   
                    data.daysPosts.push({
                        "x": `${element.date}`,
                        "y": `${element.postsCount}`
                    })
                });
                resolve(data)
            } catch (e) {
                reject({error: e})
            }
        })
        .catch(e => reject({error: e}))
    })
}

async function fetchViewsStats() {
    return new Promise((resolve, reject) => {
        models.DayViewsStats.find()
        .then((stats: any) => {
            try {
                let data = {
                    allViews: 0,
                    daysViews: [],
                    error: null
                }
                stats.forEach(element => {
                    data.allViews += element.viewsCount   
                    data.daysViews.push({
                        "x": `${element.date}`,
                        "y": `${element.viewsCount}`
                    })
                });
                resolve(data)
            } catch (e) {
                reject({error: e})
            }
        })
        .catch(e => reject({error: e}))
    })
}

async function collectStatsData() {
    let viewsData = null
    let postsData = null

    await fetchViewsStats()
        .then (data => {
        viewsData = data
    })
    .catch(e => {return({status: 500, error: e})})

    await fetchPostsStats()
        .then (data => {
        postsData = data
    })
    .catch(e => {return({status: 500, error: e})})

    return new Promise((resolve, reject) => {
        try {
            if (!viewsData || !postsData)
                reject({status: 500, error: "fetching data error"})

            let data = {
                allTime: {
                    visits: 0,
                    posts: 0,
                },
                daysTime: [
                    {
                        "id": "new posts",
                        "data" : []
                    },
                    {
                        "id" : "visits",
                        "data" : []
                    }
                ]
            }

            data.allTime.visits = viewsData.allViews
            data.allTime.posts = postsData.allPosts

            data.daysTime[1].data = viewsData.daysViews
            data.daysTime[0].data = postsData.daysPosts
            
            if(data)
                resolve({status: 200, stats: data})
            else
                reject({status: 404, error: 'data not found'})
        } catch (e) {
            reject({status: 500, error: e})
        }
    })
}


export async function getStats() {
    return new Promise((resolve, reject) => {
        collectStatsData()
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