"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = __importDefault(require("./Routes/api"));
const main_1 = __importDefault(require("./Routes/main"));
const router = express_1.Router();
router.use('/', main_1.default);
router.use('/api', api_1.default);
module.exports = router;
//# sourceMappingURL=router.js.map