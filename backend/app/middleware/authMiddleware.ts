import * as models from '../models'


export async function checkAuth(req, res, next) {
    const decodedTokenData = req.headers.authorization

    if (!decodedTokenData){
        return res.status(401).send({status: 401, error: 'Auth required'})
    }

    const userRecord = await models.Session.find({ token: decodedTokenData })
    req.currentUser = userRecord;
   
    if(userRecord.length == 0) {
      return res.status(401).send({status: 401, error: 'User not found'})
    } else {
      return next()
   }
}