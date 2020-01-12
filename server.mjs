import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { JokeService } from './jokes-service.mjs';

const app = express();
const port = process.env.port || 8000;

const corsOptions = {
    credentials: true,
    methods: ['POST', 'GET']
}

app.use(bodyParser.json());
app.use(cors(corsOptions))
app.listen(port, () => console.log('Server started'))

const jokeService = new JokeService();

// jokes route

app.route('/api/jokes').get((req, res) => {
    const joke = jokeService.getJoke();
    res.status(200).send(joke)
})