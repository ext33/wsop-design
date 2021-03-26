import {Router} from 'express'
import apiRoutes from './app/router'
import config from './config'
import path from 'path'

const router = Router()

router.get('/', (req, res) => {
    res.send('Test')
})

router.get('/uploads/:file', (req, res) => {
    try {
        res.sendFile(path.join(config.server.rootDir, 'uploads', req.params.file))
    } catch (e) {
        res.status(500).send({status: 500, error: e})
    }
})

router.use('/api', apiRoutes)

export default router