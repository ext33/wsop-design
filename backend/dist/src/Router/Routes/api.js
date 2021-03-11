"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRoutes = express_1.Router();
apiRoutes.get('/main', (req, res) => {
    res.send('Api');
});
exports.default = apiRoutes;
//# sourceMappingURL=api.js.map