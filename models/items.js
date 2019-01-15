const { getConnection } = require('../lib/db');
const db = getConnection();

const getItems = limit => db.any('select * from mytable limit $1;', limit);

const getItem = id => db.one('select * from mytable where id = $1', id);

const insertItem = values => {
  const { id, model, price, configuration, description, img } = values;
  return db.one(
    `insert into mytable(id, model, price, configuration, description, img) values ($1, $2, $3, $4, $5, $6) returning id`,
    [id, model, price, configuration, description, img]
  );
};

const deleteItem = id =>
  db.one('delete from mytable where  id = $1 returning id', [id]);

const updateItem = (id, values) => {
  const { model, price, configuration, description, img } = values;
  console.log(values);

  return db.one(
    `update mytable set id = $1, model = $2, price = $3, configuration = $4, description = $5, img = $6 where id = ${id} returning id`,
    [id, model, price, configuration, description, img]
  );
};
module.exports = { getItems, getItem, insertItem, deleteItem, updateItem };
