import { jokes } from './jokes';

export class JokeService {
  constructor() {}

  getJoke() {
    return JSON.stringify(jokes[Math.floor((Math.random() * jokes.length))]);
  }
}
