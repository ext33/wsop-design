"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require('mongoose');
const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'your_password';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'wsop';
let url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}`;
// let url: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongo.connect(url, { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log('Connection error: ', err);
                throw err;
            }
            console.log('Connected');
        });
    });
}
exports.default = connectDB;
//# sourceMappingURL=db.js.map