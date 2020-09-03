import express from "express";
import bodyParser = require("body-parser");
import getMovies from './movies';
import cors from 'cors';

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/movies',getMovies)

app.listen(3001,() => console.log('Listening on PORT:3001'));