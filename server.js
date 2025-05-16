import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send(`<h1>Home Page</h1>`);
});

app.get('/about', (req, res) => {
  return res.send(`<h1>About Page</h1>`);
});

app.get('/contact', (req, res) => {
  return res.send(`<h1>Contact Page</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`);
});
