const { Ingrediants } = require("../models");

const ingrediantsData =
[
    {
        "id": 1,
        "name": "Cheese"
    },
    {
        "id": 2,
        "name": "Tomato"
    },
    {
        "id": 3,
        "name": "Dough"
    },
    {
        "id": 4,
        "name": "Chicken"
    },
    {
        "id": 5,
        "name": "Spice"
    },
    {
        "id": 6,
        "name": "Rice"
    },
    {
        "id": 7,
        "name": "Sliced Beef"
    },
    {
        "id": 8,
        "name": "Vegetables"
    },
    {
        "id": 9,
        "name": "Noodles"
    },
    {
        "id": 10,
        "name": "Steak"
    },
    {
        "id": 11,
        "name": "Spaghetti"
    },
    {
        "id": 12,
        "name": "Mushroom"
    },
    {
        "id": 13,
        "name": "Chicken Breast"
    },
    {
        "id": 14,
        "name": "Butter"
    },
    {
        "id": 15,
        "name": "Herbs"
    },
    {
        "id": 16,
        "name": "Egg"
    },
    {
        "id": 17,
        "name": "Jasmine Rice"
    },
    {
        "id": 18,
        "name": "Pork"
    },
    {
        "id": 19,
        "name": "Chocolate"
    },
    {
        "id": 20,
        "name": "Flour"
    },
    {
        "id": 21,
        "name": "Syrup"
    },
    {
        "id": 22,
        "name": "Lemon"
    },
    {
        "id": 23,
        "name": "pastry"
    },
    {
        "id":24,
        "name": "Cream"
    }
]

const ingrediantsSeed = () => Ingrediants.bulkCreate(ingrediantsData);

module.exports = ingrediantsSeed;