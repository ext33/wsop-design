import {Router} from 'express'
import test from '../../App/Models'

const apiRoutes = Router()

apiRoutes.post('/test', async (req, res) => {
    const Test = new test({title: req.body.title})
    await Test.save()

    const response = await test.find()
    res.send(response)
});

export default apiRoutes