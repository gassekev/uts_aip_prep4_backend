import express from 'express';
import httpStatus from 'http-status';
import { json as jsonBodyParser } from 'body-parser';
import Movie from './src/movie';

const app = express();
const movie = new Movie();

app.use(jsonBodyParser());

app.get('/', function (req, res) {
  res.json(movie);
});

app.post('/', function (req, res) {
  for (let prop in req.body){
    if (Movie.publicProps().includes(prop)){
      movie[prop] = req.body[prop];
    }
  }
  res.sendStatus(httpStatus.OK);
})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
