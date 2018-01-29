import express from 'express';
import renderer from './helpers/renderer.js';

const app = express();

app.use(express.static('public')); //tells express to deal with the public directory as a static / public resource for
//the outside world

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
