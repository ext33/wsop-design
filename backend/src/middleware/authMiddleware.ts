import jwt from 'express-jwt'
import * as models from '../app/models'
import config from '../../config'


export function generateToken(user: any) {
    const data =  {
        _id: user._id,
        name: user.username,
        email: user.email
    };
    const signature = config.server.secretKey;
    const expiration = '48h';

    return jwt.sign({ data, }, signature, { expiresIn: expiration });
}
  
export function isAuth(req, res) {
    if (!req.headers.authorization){
        return res.status(401).send({status: 401, error: 'Auth required'})
    }
    const tokenData = jwt({
        secret: config.server.secretKey, 
        userProperty: 'token',
        algorithms: ['HS256'],
        getToken: () => {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1]
            }
        }
    })
    console.log(tokenData)
    return tokenData
}

export async function attachUser(req, res, next) {
    const decodedTokenData = req.headers.authorization

    if (!decodedTokenData){
        return res.status(401).send({status: 401, error: 'Auth required'})
    }

    const userRecord = await models.User.find({ _id: decodedTokenData._id })
    req.currentUser = userRecord;
   
    if(!userRecord) {
      return res.status(401).send({status: 401, error: 'User not found'})
    } else {
      return next()
   }
}