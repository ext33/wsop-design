"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const db_1 = __importDefault(require("./db"));
const port = 8001;
db_1.default();
app_1.default.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map