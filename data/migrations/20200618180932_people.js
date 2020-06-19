
exports.up = function(knex) {
  return knex.schema.createTable('people', tbl => {
      tbl.increments();

      tbl.string('name', 225).notNullable().unique();
      tbl.string('faction', 225).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('people');
};
