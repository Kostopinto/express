const model = require('../models/items');

const getItems = limit => {
  return model.getItems(limit);
};

const getItemById = id => {
  return model.getItem(id);
};

const insertItem = values => {
  return model.insertItem(values);
};

const deleteItem = id => {
  return model.deleteItem(id);
};

const updateItem = (id, values) => {
  return model.updateItem(id, values);
};

module.exports = { getItems, getItemById, insertItem, deleteItem, updateItem };
