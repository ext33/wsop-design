"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainRoutes = express_1.Router();
mainRoutes.get('/', (req, res) => {
    res.send('Test');
});
exports.default = mainRoutes;
//# sourceMappingURL=main.js.map