import * as models from '../../app/api/models'

export async function createPost(imageSrc: String, imageAlt: String, username: String, email: String, description: String) {
    return new Promise((resolve, reject) => {
        const NewPost = new models.Post({
            imageSrc: imageSrc,
            imageAlt: imageAlt,
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
            if(Post.n > 0) {
                resolve({status: 200, post: Post})
            }
            else {
                resolve({status: 404, error: "Not Found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function deletePost(id: String){
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

export async function acceptPost(id: String){
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

export async function archivePost(id: String){
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