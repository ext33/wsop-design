import {Router} from 'express'
import apiRoutes from './routes/api'
import mainRoutes from './routes/main'

const router = Router()

router.use('/', mainRoutes)
router.use('/api', apiRoutes)

export default router