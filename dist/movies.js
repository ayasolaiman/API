"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMovies(req, res) {
    var list = ["Kill Bill", "LaLa Land", "Africano", "MeMe"];
    console.log('Movies List:', list);
    res.send({ success: true, movies: list });
}
exports.default = getMovies;
