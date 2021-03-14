"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const router_1 = __importDefault(require("./src/Router/router"));
var multer = require('multer');
var upload = multer();
let db;
exports.db = db;
const app = express_1.default();
const port = 8000;
exports.db = db = db_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.use(router_1.default);
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map