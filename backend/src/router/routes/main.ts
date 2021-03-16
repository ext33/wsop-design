import {Router} from 'express'
const mainRoutes = Router()

mainRoutes.get('/', (req, res) => {
    res.send('Test')
});


export default mainRoutes