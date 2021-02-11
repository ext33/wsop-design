const express = require('express');
const bodyParser = require('body-parser');

class Application {
    constructor () {
        this.expressApp = express();
        this.attachRoutes();
    }

    attachRoutes () {
        let app = this.expressApp;
        // let jsonParser = bodyParser.json();

        // app.get('/', this.roomSearchHandler.bind(this));
    }
}

module.exports = Application;