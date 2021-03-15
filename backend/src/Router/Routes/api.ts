import {Router} from 'express'
import * as views from '../../app/api/views'

interface Response {
    status?: number, 
    posts?: Array<any>,
    post?: Array<any>,
    error?: String
}

const apiRoutes = Router()

apiRoutes.post('/createPost', async (req, res) => {
    let result: Response = await views.createPost(
        req.body.imageSrc,
        req.body.imageAlt,
        req.body.username, 
        req.body.email, 
        req.body.description
    )
    res.status(result.status).send(result)
});

apiRoutes.get('/getPosts', async (req, res) => {
    let result: Response = await views.getPosts()
    res.status(result.status).send(result)
})

apiRoutes.get('/getPost/:id', async (req, res) => {
    let result: Response = await views.getPost(req.params.id)
    res.status(result.status).send(result)
})

apiRoutes.get('/deletePost/:id', async (req, res) => {
    let result: Response = await views.deletePost(req.params.id)
    res.status(result.status).send(result)
})

apiRoutes.get('/acceptPost/:id', async (req, res) => {
    let result: Response = await views.acceptPost(req.params.id)
    res.status(result.status).send(result)
})

apiRoutes.get('/archivePost/:id', async (req, res) => {
    let result: Response = await views.archivePost(req.params.id)
    res.status(result.status).send(result)
})

export default apiRoutes