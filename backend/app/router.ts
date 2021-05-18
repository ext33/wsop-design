import {Router} from 'express'
import log from './middleware/consoleMiddleware'
import * as postControllers from './controllers/postControllers'
import * as statsControllers from './controllers/statsConrollers'
import * as authControllers from './controllers/authControllers'
import { checkAuth } from './middleware/authMiddleware'

interface Response {
    status?: number, 
    data?: Array<any>,
    error?: String
}

// cors settings
const allowOriginValue = '*'

const apiRoutes = Router()

// posts urls
apiRoutes.post('/createPost', async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)
    
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
        .catch(e => {res.status(500).send({status: 500, error: e})})

        let statResult: Response = await statsControllers.addStatsPost()
        .catch(e => {
            log('error', `/api/acceptPost/${req.params.id}  {status: ${e}}`)
        })
        if (statResult.status !== 200) 
            log('warn', `/api/acceptPost/${req.params.id}  {status: stats object save error}`)

        log('api', `/api/createPost {status: ${result.status}}`)
        res.status(result.status).send(result)
    }
});

apiRoutes.get('/getPosts', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.getPosts()
    log('api', `/api/getPosts {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/getSubmittedPosts', async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.getSubmittedPosts()
    log('api', `/api/getPosts {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/getPost/:id', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.getPost(req.params.id)

    log('api', `/api/getPost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/deletePost/:id', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.deletePost(req.params.id)

    log('api', `/api/deletePost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/acceptPost/:id', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.acceptPost(req.params.id)

    log('api', `/api/acceptPost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/archivePost/:id', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await postControllers.archivePost(req.params.id)

    log('api', `/api/archivePost/${req.params.id} {status: ${result.status}}`)
    res.status(result.status).send(result)
})



// stats urls
apiRoutes.get('/getStats', checkAuth, async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await statsControllers.getStats()

    log('api', `/api/getViewsStats {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/addStatsView', async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await statsControllers.addStatsView()

    log('api', `/api/addStatsView {status: ${result.status}}`)
    res.status(result.status).send(result)
})

// auth routes
apiRoutes.post('/login', async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await authControllers.login(
        req.body.email,
        req.body.password
    )

    log('api', `/api/login {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.get('/logout', checkAuth, async (req, res) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)

    let result: Response = await authControllers.logout(req.headers.authorization)

    log('api', `/api/logout {status: ${result.status}}`)
    res.status(result.status).send(result)
})

apiRoutes.post('/signUp', async (req?: any, res?: any) => {
    res.set('Access-Control-Allow-Origin', allowOriginValue)
    
    let result: Response = await authControllers.signUp(
        req.body.username,
        req.body.password,
        req.body.email, 
        req.body.userImage   
    )

    log('api', `/api/signUp {status: ${result.status}})`)
    res.status(result.status).send(result)
})

export default apiRoutes