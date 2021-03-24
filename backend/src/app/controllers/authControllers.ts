import * as models from '../models'
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import config from '../../../config'


function generateToken(user) {
    const data =  {
        _id: user._id,
        name: user.username,
        email: user.email
    };
    const signature = config.server.secretKey;
    const expiration = '48h';

    return jwt.sign({ data, }, signature, { expiresIn: expiration });
}
  
function buildLoginResponce(User, password) {
    try {
        const correctPassword = argon2.verify(User.password, password)
        if(correctPassword) {
            const token = generateToken(User)
            const NewSession = new models.Session({
                userId: User._id,
                username: User.username,
                email: User.email,
                token: token
            })
            NewSession.save()

            return {
                status: 200,
                user: {
                    uid: User._id,
                    username: User.username,
                    userImage: User.userImage,
                    email: User.email,
                },
                token: token
            }
        } else {
            return {status: 400, error: "Incorrect password"}
        }
    } catch (e) {
        return{status: 500, error: e}
    }
}



export async function signUp(username: String, password: string, email: String, userImage: String) {
    return new Promise((resolve, reject) => {
        models.User.find({ email: email })
        .then((User: any) => {
            if (User.length == 0) {
                argon2.hash(password)
                .then((passwordHashed) => {
                    const NewUser =  new models.User({
                        username: username,
                        email: email,
                        password: passwordHashed,
                        userImage: userImage
                    })
            
                    NewUser.save()
                    .then(() => resolve({status: 200}))
                    .catch(e => reject({status: 500, error: e}))
                })
                .catch(e => reject({status: 500, error: e}))
            } else {
                resolve ({status: 400, error: "User already exists"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    });
}

export async function login(email: String, password: string) {
    return new Promise((resolve, reject) => {
        models.User.find({email: email})
        .then((User: any) => {
            if(User.length > 0) {
                resolve(buildLoginResponce(User[0], password))
            } else {
                resolve ({status: 404, error: "User not found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}