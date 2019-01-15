const express = require('express');
const router = express.Router();
const itemsManager = require('../managers/items');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

router.get('/items', (req, res, next) => {
  itemsManager
    .getItems(parseInt(req.query['_limit']))
    .then(result => res.json(result))
    .catch(e => next(e));
});

router.param('id', (req, res, next) => {
  itemsManager
    .getItemById(req.params.id)
    .then(item => {
      res.item = item;
      next();
    })
    .catch(e => next(e));
});

router.get('/items/:id', (req, res, next) => {
  res.json(res.item);
});

router.post('/items', jsonParser, (req, res, next) => {
  itemsManager
    .insertItem(req.body)
    .then(element => res.send('Add product whith id ' + element.id))

    .catch(e => next(e));
});

router.delete('/items/:id', (req, res, next) => {
  itemsManager
    .deleteItem(req.params.id)
    .then(element => res.send('Delete element id: ' + element.id))
    .catch(e => next(e));
});

router.patch('/items/:id', (req, res, next) => {
  console.log(req.params.id);
  itemsManager
    .updateItem(req.params.id, req.body)
    .then(element => res.send('Update element ' + element.id))
    .catch(e => next(e));
});

module.exports = router;
