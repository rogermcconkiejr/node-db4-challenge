
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments();
  
        tbl.string('name', 255).notNullable();
    })
    .createTable('ingredients', tbl=>{
      tbl.increments();
  
      tbl.string('name', 255).notNullable();
    })
    .createTable('user_favorites', tbl=>{
      tbl.increments();
  
      tbl.text('notes')
  
      //these next 2 columns add the foreign keys
      tbl
      .integer('recipes_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  
      tbl
      .integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
  
      tbl.unique(['recipes_id', 'ingredients_id'])
    })
  };

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('user_favorites')
  .dropTableIfExists('users')
  .dropTableIfExists('pois')
};
