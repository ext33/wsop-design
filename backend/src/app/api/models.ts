import {Schema, model} from 'mongoose'

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