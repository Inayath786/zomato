const express = require('express');
const { resolve } = require('path');
let cors = require('cors');
let sqlite3 = require('sqlite3').verbose();
let { open } = require('sqlite');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

let db;

(async () => {
  db = await open({
    filename: './BD4.1/database.sqlite',
    driver: sqlite3.Database,
  });
})();

async function fetchallmovies() {
  let query = 'SELECT * FROM restaurents';
  let response = await db.all(query, []);
  return { movies: response };
}
app.get('/movies', async (req, res) => {
  let result = await fetchallmovies();
  res.status(200).json(result);
});

app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
