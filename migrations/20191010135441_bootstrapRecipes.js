
exports.up = function(knex) {
    return knex.schema
    .createTable('recipesgood', tbl=>{
        tbl.increments();
  
        tbl.string('name', 255).notNullable();
    })
    .createTable('ingredientsgood', tbl=>{
      tbl.increments();
  
      tbl.string('name', 255).notNullable();
    })
    .createTable('recipe_ingredients', tbl=>{
        tbl.increments();
    
        tbl.text('notes')
    
        //these next 2 columns add the foreign keys
        tbl
        .integer('recipesgood_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipesgood')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    
        tbl
        .integer('ingredientsgood_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredientsgood')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
    
        tbl.unique(['recipesgood_id', 'ingredientsgood_id'])
      })
  };

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('recipesgood')
  .dropTableIfExists('ingredientsgood')
};
