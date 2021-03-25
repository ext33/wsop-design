import {Schema, model} from 'mongoose'
import {getNowDate} from './middleware/dateMiddleware'

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
        default: getNowDate()
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
        unique: true,
        default: getNowDate()
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
        unique: true,
        default: getNowDate()
    }
})

export const DayPostsStats = model('DayPostsStats', DayPostsStatsSchema)


// auth models
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
    },
    userImage: {
        type: String,
        required: true
    }
})

export const User = model('User', UserSchema)

const SessionShema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
})

export const Session = model('Session', SessionShema)