import {Router} from 'express'
import * as views from '../../app/api/views'


const apiRoutes = Router()

apiRoutes.post('/createPost', async (req, res) => {
    let result = await views.createPost(
        req.body.imageSrc,
        req.body.imageAlt,
        req.body.username, 
        req.body.email, 
        req.body.description
    )
    res.send(result)
});

apiRoutes.get('/getPosts', async (req, res) => {
    let result = await views.getPosts()
    res.send(result)
})

export default apiRoutes