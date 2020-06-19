
exports.seed = function(knex) {
  return knex('people')
  .truncate()
    .then(function () {
      return knex('people').insert([
        { name: 'luke', faction: 'rebels'},
        { name: 'leia', faction: 'rebels'},
        { name: 'vader', faction: 'empire'},
        { name: 'sidious', faction: 'empire'},
      ]);
    });
};
