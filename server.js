const express = require('express');
let request = require("request");
const app = express();
const port = 5000;
const url = 'https://pokeapi.co/api/v2/pokemon/1';

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/newEndpoint', (req, res) => {
//   res.send('This is my new endpoint');
// });

app.get("/getPokemon", (req, res) => {
  request(
    url,
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