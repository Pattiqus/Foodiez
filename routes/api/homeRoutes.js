const router = require('express').Router();
const { Recipe,Ingrediants,RecipeIngrediants } = require("../../models");


router.get('/', async (req, res) => {
  try {

    const Datas = await Recipe.findAll({
      include: [{ model: Ingrediants, through : RecipeIngrediants}]
  });
  const data= Datas.map((data) => data.get({ plain: true }));

    res.render('homepage',{

    })
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }


});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('signup',{isLoggedIn:false});
});


module.exports = router;
