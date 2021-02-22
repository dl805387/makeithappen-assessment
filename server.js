const express = require('express');
let request = require("request");
const app = express();
const port = 5000;
const url = 'https://pokeapi.co/api/v2/pokemon/';

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/newEndpoint', (req, res) => {
//   res.send('This is my new endpoint');
// });

const randomNumber = () => {
  return Math.floor(Math.random() * (700 - 1 + 1)) + 1;
}

app.get("/getPokemon", (req, res) => {
  request(
    url + randomNumber(),
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        let parsedBody = JSON.parse(body);
        let item = parsedBody;
        res.send({item});
      }
    }
  );
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});