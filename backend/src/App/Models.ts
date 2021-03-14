import {Schema, model} from 'mongoose'

const test = new Schema({
    title: {
        type: String,
        required: true
    }
})

export default model('test', test)