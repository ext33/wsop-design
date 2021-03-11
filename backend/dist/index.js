"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = require('./src/Router/router');
const app = express_1.default();
const port = 8000;
app.use(router);
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map