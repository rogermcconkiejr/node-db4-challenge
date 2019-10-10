
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsgood').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsgood').insert([
        {name: 'cheese'},
        {name: 'eggs'},
        {name: 'flour'},
        {name: 'sugar'},
        {name: 'chocolate'},
        {name: 'bread'},
        {name: 'turkey'},
        {name: 'tortillas'}
      ]);
    });
};
