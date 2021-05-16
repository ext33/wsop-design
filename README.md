# WSOP DESIGN

My own project of simple image gallery

## Structure
| Folder               |  Description                                  |
|----------------------|--------------------------------------------|
| `/backend`        | Node API server           |
| `/backend/app`    | API app                                 |
| `/front`             | React app                         |
| `/front/src/index.js` | React app entry point                 | 


## Stack
- React
- Redux
- Node js
- Mongo
- Docker

## Configurating

Before setup/deploy project, you must change ``` /backend/config.ts ``` config file

```js
"server": {
    "host": "nodejs",   // node server host (don't change)
    "port": 8080,   // node server port (don't change)
    "rootDir": String(process.cwd() + "/"), // server root dir (don't change)
    "secretKey": "" // set server secret key
},
"database": {
    "host": "db",   // db host (don't change)
    "port": 27017   // db port (don't change)
},
"administration": {
    "username": "admin",    // set superuser name
    "email": "admin@test.com",  // set superuser email
    "password": "123456"    // set superuser password
}
```
