const { User } = require("../models");

const userData = [
  {
    "id": 1,
    "username": "Mario",
    "first_name": "Mario",
    "last_name": "Kart",
    "email": "mario@gmail.com",
    "password": "password12345"
  },
  {
    "id": 2,
    "username": "Luigi",
    "first_name": "Luigi",
    "last_name": "Kart",
    "email": "luigi@gmail.com",
    "password": "password12345"
  },
  {
  "id": 3,
  "username": "Yoshi",
  "first_name": "Yoshi",
  "last_name": "Kart",
  "email": "Bowser@gmail.com",
  "password": "password12345"
  },
  {
  "id": 4,
  "username": "Wario",
  "first_name": "Wario",
  "last_name": "Kart",
  "email": "Wario@gmail.com",
  "password": "password12345"
  },
  {
  "id": 5,
  "username": "Toad",
  "first_name": "Toad",
  "last_name": "Kart",
  "email": "Toad@gmail.com",
  "password": "password12345"
  } 
]

const userSeed = () => User.bulkCreate(userData);

module.exports = userSeed;