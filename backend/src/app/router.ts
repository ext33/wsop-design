import {Router} from 'express'
import log from '../middleware/consoleMiddlware'
import * as postControllers from './controllers/postControllers'
import * as statsControllers from './controllers/statsConrollers'

interface Response {
    status?: number, 
    posts?: Array<any>,
    post?: Array<any>,
    error?: String
}


const apiRoutes = Router()


// posts urls
apiRoutes.post('/createPost', async (req?: any, res?: any) => {
    if(!req.file){
        log('api', `/api/createPost {status: 400}`)
        res.status(400).send({status: 400, error: 'File not uploaded'})
    }
    else {
        let result: Response = await postControllers.createPost(
            req.file,
            req.body.username, 
            req.body.email, 
            req.body.description
        )
        log('api', `/api/createPost {status: ${result.status}}`)
        res.status(result.status).send(result)
    }
});

apiRoutes.get('/getPosts', async (req?: any, res?: any) => {
    let result: Response = await postControllers.getPosts()
    log('api', `/api/getPosts {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/getPost/:id', async (req?: any, res?: any) => {
    let result: Response = await postControllers.getPost(req.params.id)

    log('api', `/api/getPost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/deletePost/:id', async (req?: any, res?: any) => {
    let result: Response = await postControllers.deletePost(req.params.id)

    log('api', `/api/deletePost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/acceptPost/:id', async (req?: any, res?: any) => {
    let result: Response = await postControllers.acceptPost(req.params.id)

    log('api', `/api/acceptPost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/archivePost/:id', async (req?: any, res?: any) => {
    let result: Response = await postControllers.archivePost(req.params.id)

    log('api', `/api/archivePost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})



// stats urls
apiRoutes.get('/getViewsStats', async (req?: any, res?: any) => {
    let result: Response = await statsControllers.getViewsStats()

    log('api', `/api/getViewsStats {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/getPostsStats', async (req?: any, res?: any) => {
    let result: Response = await statsControllers.getPostsStats()

    log('api', `/api/getPostsStats {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/addStatsView', async (req?: any, res?: any) => {
    let result: Response = await statsControllers.addStatsView()

    log('api', `/api/addStatsView {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/addPostsView', async (req?: any, res?: any) => {
    let result: Response = await statsControllers.addStatsPost()

    log('api', `/api/addStatsPost {status: ${result.status}}`)
    res.status(result.status).send(result)
})


export default apiRoutes