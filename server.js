import express from 'express';
import httpStatus from 'http-status';
import cors from 'cors';
import { json as jsonBodyParser } from 'body-parser';
import Movie from './src/movie';

const app = express();
const movie = new Movie();

app.use(cors());
app.use(jsonBodyParser());

app.get('/', function (req, res) {
  res.json(movie);
});

app.post('/', function (req, res) {
  for (let prop in req.body){
    /**
    if(prop != 'undefined' && prop != false) {
        //validate recieved data
        
        var validProp = true;
        
        switch(prop) {
        case "duration":
            if(isNaN(req.body[prop])) {
                validProp = false;
            }
            break;
        case "title":
            break;
        case "genre":
            break;
        case "synopsis":
            break;
        default:
            validProp = false;
               
        if(validProp == true);
    }
    **/
    
    if (Movie.publicProps().includes(prop)){
      movie[prop] = req.body[prop];
    }
  }
  res.sendStatus(httpStatus.OK);
})

app.listen(3001, function () {
  console.log('Listening on port 3001!');
});
