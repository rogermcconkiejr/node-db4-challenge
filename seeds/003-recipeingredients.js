
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredientsgood_id: 1, recipesgood_id:1},
        {ingredientsgood_id: 2, recipesgood_id:2},
        {ingredientsgood_id: 1, recipesgood_id:2},
        {ingredientsgood_id: 2, recipesgood_id:3},
        {ingredientsgood_id: 3, recipesgood_id:2}        
      ]);
    });
};
