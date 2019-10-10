const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipesgood');
}

function getShoppingList(recipeId) {
    return   db('recipe_ingredients')
    .join('ingredientsgood', 'recipe_ingredients.ingredientsgood_id', '=', 'ingredientsgood.id')
    .where({ recipesgood_id : recipeId })
    .select('ingredientsgood.name','ingredientsgood.quantity')
}

function getInstructions(recipeId) {
    return db('recipesgood')
    .where({ id : recipeId })
    .select('instructions')

}