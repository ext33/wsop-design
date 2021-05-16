import log from '../middleware/consoleMiddleware'
import * as models from '../models'


async function create(adminData) {
    await new models.User({
        username: adminData.username,
        email: adminData.email,
        password: adminData.password
    }).save()
    .then(() => {log('ok', "SuperUser created")})
    .catch((e) => {log('error', e)})
}

export default async function createSuperUser (data) {
    await models.User.find({username: data.username})
    .then((User: Array<any>)=>{
        if(User.length == 0) {
            create(data)
        } else {
            log('info', "SuperUser already exist")
        }
    })
    .catch((e) => {log('error', e)})
}