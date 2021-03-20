import fs from 'fs'
import path from 'path'
import config from '../../../config'
import * as models from '../models'
import {getNowDate} from '../../middleware/dateMiddleware'


// posts vews
export async function createPost(imageFile: any, username: String, email: String, description: String) {
    return new Promise((resolve, reject) => {
        const NewPost = new models.Post({
            imageSrc: imageFile.path,
            imageAlt: imageFile.originalname.slice(1, ),
            username: username,
            email: email,
            description: description
        })
        
        NewPost.save()
        .then(() => resolve({status: 200}))
        .catch(e => reject({status: 500, error: e}))
    });
}

export async function getPosts() {
    return new Promise((resolve, reject) => {
        models.Post.find()
        .then(Posts => resolve({status: 200, posts: Posts}))
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function getPost(id: String) {
    return new Promise((resolve, reject) => {
        models.Post.find({_id: id})
        .then((Post: any) => {
            if(Post.length > 0) {
                resolve({status: 200, post: Post})
            }
            else {
                resolve({status: 404, error: "Not Found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function deletePost(id: String) {
    try {
        const file: any = await models.Post.findOne({_id: id})
        if(!file){
            return ({status: 404, error: "Not Found"})
        }
        try{
            fs.unlinkSync(path.join(config.server.rootDir, String(file.imageSrc)))
        } catch (e) {
            return({status: 500, error: e})
        }
    } catch (e) {
        return({status: 500, error: e})
    }

    return new Promise((resolve, reject) => {
        models.Post.deleteOne({_id: id})
        .then((Post: any) => {
            if(Post.n > 0) {
                
                resolve({status: 200})
            }
            else {
                resolve({status: 404, error: "Not Found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function acceptPost(id: String) {
    return new Promise((resolve, reject) => {
        models.Post.updateOne({_id: id}, {submitted: 'true'})
        .then((Post: any) => {
            if(Post.n > 0) {
                resolve({status: 200})
            }
            else {
                resolve({status: 404, error: "Not Found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function archivePost(id: String) {
    return new Promise((resolve, reject) => {
        models.Post.updateOne({_id: id}, {submitted: 'false'})
        .then((Post: any) => {
            if(Post.n > 0) {
                resolve({status: 200})
            }
            else {
                resolve({status: 404, error: "Not Found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

// stats views
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
