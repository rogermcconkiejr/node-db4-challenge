
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipesgood').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipesgood').insert([
        {name: 'Cake'},
        {name: 'Quesadilla'},
        {name: 'Sandwhich'}
      ]);
    });
};
