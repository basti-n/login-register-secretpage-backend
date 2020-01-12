import { jokes } from "./jokes.mjs";

export class JokeService {
    constructor() {}

    getJoke() {
        return JSON.stringify(jokes[Math.floor((Math.random() * jokes.length))])
    }
}