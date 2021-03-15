"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("../router/router"));
var multer = require('multer');
var upload = multer();
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
app.use(router_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map