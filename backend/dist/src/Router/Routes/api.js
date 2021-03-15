"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = require("express");
const views = __importStar(require("../../app/api/views"));
const apiRoutes = express_1.Router();
apiRoutes.post('/createPost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.createPost(req.body.imageSrc, req.body.imageAlt, req.body.username, req.body.email, req.body.description);
    res.status(result.status).send(result);
}));
apiRoutes.get('/getPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.getPosts();
    res.status(result.status).send(result);
}));
apiRoutes.get('/getPost/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.getPost(req.params.id);
    res.status(result.status).send(result);
}));
apiRoutes.get('/deletePost/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.deletePost(req.params.id);
    res.status(result.status).send(result);
}));
apiRoutes.get('/acceptPost/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.acceptPost(req.params.id);
    res.status(result.status).send(result);
}));
apiRoutes.get('/archivePost/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield views.archivePost(req.params.id);
    res.status(result.status).send(result);
}));
exports.default = apiRoutes;
//# sourceMappingURL=api.js.map