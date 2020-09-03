import { Request, Response } from "express";

export default function getMovies(req: Request, res: Response){
    const list = ["Kill Bill", "LaLa Land", "Africano", "MeMe"]
    //console.log('Movies List:', list)
    res.send({ success: true, movies: list })
}