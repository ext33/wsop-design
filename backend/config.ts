import path from 'path'

export default {
    "server": {
        "host": "0.0.0.0",
        "port": 8001,
        "rootDir": String(process.cwd() + "/")
    },
    "database": {
        "host": "localhost",
        "port": 27017
    }
}