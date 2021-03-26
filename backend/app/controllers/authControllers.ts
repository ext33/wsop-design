import * as models from '../models'
import * as argon2 from 'argon2'
import * as jwt from 'jsonwebtoken'
import config from '../../config'


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
  
async function verifyLogin(User, password) {
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
            await NewSession.save()
            
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
        return {status: 500, error: e}
    }
}

async function deleteSession(token: string) {
    try {
        const session = await models.Session.deleteOne({token: token})
        if(session.n > 0) {
                
            return({status: 200})
        }
        else {
            return({status: 404, error: "Not Found"})
        }
    } catch (e) {
        return {status: 500, error: e}
    }
}

async function createUser(username: string, password: string, email: string, userImage: string) {
    try{
        const NewUser = new models.User({
            username: username,
            email: email,
            password: await argon2.hash(password),
            userImage: userImage
        })
        await NewUser.save()

        return {status: 200}
    } catch (e) {
        return {status: 500, error: e}
    }
}



export async function signUp(username: string, password: string, email: string, userImage: string) {
    return new Promise((resolve, reject) => {
        models.User.find({ email: email })
        .then((User: any) => {
            if (User.length == 0) {
                resolve(createUser(username, password, email, userImage))
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
                
                resolve(verifyLogin(User[0], password))
            } else {
                resolve ({status: 404, error: "User not found"})
            }
        })
        .catch(e => reject({status: 500, error: e}))
    })
}

export async function logout(token: string) {
    return new Promise((resolve, reject) => {
        
        models.Session.find({token: token})
        .then((Session: any) => {
            if(Session.length > 0) {
                resolve(deleteSession(token))
            } else {
                resolve({status: 404, error: "Session not found"})
            }
        })
        .catch((e) => reject({status: 500, error: e}))
    })
}