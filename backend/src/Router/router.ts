import {Router} from 'express'
import apiRoutes from './Routes/api'
import mainRoutes from './Routes/main'

const router = Router()

router.use('/', mainRoutes)
router.use('/api', apiRoutes)

module.exports = router