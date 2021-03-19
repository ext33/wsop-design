import {Schema, model} from 'mongoose'


// post models
const PostSchema = new Schema({
    imageSrc: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    submitted: {
        type: String,
        default: 'false'
    },
    uploadDate: {
        type: String,
        default: () => {
            let date_ob = new Date(Date.now())
            return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()}`
        }
    }
})

export const Post = model('Post', PostSchema)


// stats models
const DayViewsStatsSchema = new Schema({
    viewsCount: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: () => {
            let date_ob = new Date(Date.now())
            return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()}`
        }
    }
})

export const DayViewsStats = model('DayViewsStats', DayViewsStatsSchema)

const DayPostsStatsSchema = new Schema({
    postsCount: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
        default: () => {
            let date_ob = new Date(Date.now())
            return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()}`
        }
    }
})

export const DayPostsStats = model('DayPostsStats', DayPostsStatsSchema)


// user models
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = model('User', UserSchema)