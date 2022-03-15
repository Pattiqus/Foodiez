const { Recipe } = require("../models");

const recipeData = [
  {
    "id": 1,
    "recipe_name": "Margheritta Pizza",
    "preperation_time": 35,
    "user_id": 1
  },
  {
    "id": 2,
    "recipe_name": "Butter Chicken",
    "preperation_time": 45,
    "user_id": 2
  },
  {
    "id": 3,
    "recipe_name": "Beef Stirfry",
    "preperation_time": 45,
    "user_id": 3
  },
  {
    "id": 4,
    "recipe_name": "Beef stroganoff",
    "preperation_time": 50,
    "user_id": 4
  },
  {
    "id": 5,
    "recipe_name": "Chicken Kiev",
    "preperation_time": 60,
    "user_id": 5
  },
  {
    "id": 6,
    "recipe_name": "Fried Rice",
    "preperation_time": 20,
    "user_id": 1
  },
  {
    "id": 7,
    "recipe_name": "Chocolate Mud Cake",
    "preperation_time": 90,
    "user_id": 3
  },
  {
    "id": 8,
    "recipe_name": "Lemon Tart",
    "preperation_time": 75,
    "user_id": 5
  }
]

const recipeSeed = () => Recipe.bulkCreate(recipeData);

module.exports = recipeSeed;