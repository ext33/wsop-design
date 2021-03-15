"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Post = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const PostSchema = new mongoose_1.Schema({
    uid: {
        type: String,
        default: uuid_1.uuid
    },
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
            let date_ob = new Date(Date.now());
            return `${date_ob.getDate()}-${date_ob.getMonth() + 1}-${date_ob.getFullYear()}`;
        }
    }
});
exports.Post = mongoose_1.model('Post', PostSchema);
const UserSchema = new mongoose_1.Schema({
    uid: {
        type: String,
        default: uuid_1.uuid
    },
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
});
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=models.js.map