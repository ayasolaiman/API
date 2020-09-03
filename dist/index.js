"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = require("body-parser");
var movies_1 = __importDefault(require("./movies"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/movies', movies_1.default);
app.listen(3001, function () { return console.log('Listening on PORT:3001'); });
