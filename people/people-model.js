const db = require('../data/dbConfig');

module.exports = {
  add,
  remove,
  getAll,
  updateId,
  findById,
};

// function () {
//     return db('people');
//   }

async function add(person) {
  return db('people')
    .insert(person, 'id')
    .then((ids) => {
      return findById(ids[0]);
    });
}

function updateId(id, changes) {
    return db('people')
      .where({ id })
      .update(changes)
      .then(() => {
        return findById(id);
      });
  }

function remove(id) {
  return db('people')
  .where({ id })
  .del();
}


function getAll() {
  return db('people');
}

function findById(id) {
  return db('people')
  .where({ id })
  .first();
}