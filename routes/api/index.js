const router = require('express').Router();
const recipeRoutes = require('./RecipeRoutes');


router.use('/recipes',recipeRoutes)


module.exports = router;