const router = require('express').Router();
const recipeRoutes = require('./RecipeRoutes');
const userRoutes = require('./userRoutes'); 

router.use('/recipes',recipeRoutes);
router.use('/user', userRoutes);

module.exports = router;