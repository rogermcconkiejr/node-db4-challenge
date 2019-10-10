
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsgood').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsgood').insert([
        {name: 'cheese', quantity:'2 slices'},
        {name: 'eggs', quantity:'4 eggs'},
        {name: 'flour', quantity:'2 cups'},
        {name: 'sugar', quantity:'1.5 cups'},
        {name: 'chocolate', quantity:'4 tbspoons'},
        {name: 'bread', quantity:'2 slices'},
        {name: 'turkey', quantity:'3 slices'},
        {name: 'tortillas', quantity:'1 or 2'}
      ]);
    });
};
