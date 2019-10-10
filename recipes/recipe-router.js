const express = require('express');

const RecipeModel = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    RecipeModel.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;
  
    RecipeModel.getShoppingList(id)
    .then(ingredients => {
        res.json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get ingredients.' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    RecipeModel.getInstructions(id)
    .then(instructions => {
        res.json(instructions)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });

module.exports = router;