import {Router} from 'express'
import apiRoutes from './app/router'

const router = Router()

router.get('/', (req, res) => {
    res.send('Test')
})

router.use('/api', apiRoutes)

export default router