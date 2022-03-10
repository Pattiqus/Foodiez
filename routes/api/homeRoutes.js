const router = require('express').Router();
const { Recipe,Ingrediants,RecipeIngrediants } = require("../../models");
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {

    const Datas = await Recipe.findAll({
      include: [{ model: Ingrediants, through : RecipeIngrediants}]
  });
  const data= Datas.map((data) => data.get({ plain: true }));

    res.render('homepage',{
      isLoggedIn:req.session.logged_in,
      data
    })

  //   if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile',withAuth ,(req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }
  res.render('profile',{isLoggedIn:true});

});


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('signup',{isLoggedIn:false});
});


router.get('/add-recipe',withAuth ,(req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }
  res.render('add-recipe',{isLoggedIn:true});

});



module.exports = router;
