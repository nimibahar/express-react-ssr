import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore.js';

const app = express();

app.use(express.static('public')); //tells express to deal with the public directory as a static / public resource for
//the outside world

app.get('*', (req, res) => {
  const store = createStore();
  //some logic to initialise
  //and load data into the store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
