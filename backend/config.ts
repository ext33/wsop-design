export default {
    "server": {
        "host": "nodejs",
        "port": 8000,
        "rootDir": String(process.cwd() + "/"),
        "secretKey": "foo"
    },
    "database": {
        "host": "db",
        "port": 27017
    },
    "administration": {
        "username": "admin",
        "email": "admin@test.com",
        "password": "123456"
    }
}