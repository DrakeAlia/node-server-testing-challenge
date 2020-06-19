const db = require('../data/dbConfig');

module.exports = {
  add,
  remove,
  getAll,
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

// function update(id) {
//     return db('people')
//       .where({ id })
//       .update()
//       .then(() => {
//         return findById(id);
//       });
//   }

function remove(id) {
  return db('people')
  .where({ id })
  .del();
}

// function delete(id) {
//     const people = findById(id)
//      .first();
//     db('people')
//       .where({ id })
//       .del();
//     return people;
//   }

function getAll() {
  return db('people');
}

function findById(id) {
  return db('people')
  .where({ id })
  .first();
}