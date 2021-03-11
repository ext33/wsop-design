import {Router} from 'express'
const apiRoutes = Router()

apiRoutes.get('/main', (req, res) => {
    res.send('Api')
});

export default apiRoutes