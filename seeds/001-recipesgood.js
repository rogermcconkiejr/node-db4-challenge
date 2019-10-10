
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipesgood').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipesgood').insert([
        {name: 'Cake', instructions:'1.Mix flour and Eggs. \n 2. Add Chocolate. \n 3. Bake'},
        {name: 'Quesadilla', instructions:'1. Add cheese to tortilla. \n 2. Cook'},
        {name: 'Sandwhich', instructions:'1. Add cheese and turkey to bread. \n 2. Eat!'}
      ]);
    });
};
