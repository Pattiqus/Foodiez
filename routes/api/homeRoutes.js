const router = require('express').Router();
const { Recipe,Ingrediants,RecipeIngrediants,Steps,RecipeSteps,Image} = require("../../models");
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
  try {

     if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  else{
    res.render('homepage',{
     
    
    })

  }

  


  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/profile',withAuth ,async(req, res) => {
  router.get('/profile',withAuth ,async(req, res) => {
try {

  const Datas = await Recipe.findAll({
    include: [{ model: Ingrediants, through : RecipeIngrediants},
      { model: Steps, through : RecipeSteps},
      { model: Image }]
});
const data= Datas.map((data) => {
  data.get({ plain: true })
  
});


  res.render('profile',
  {isLoggedIn:true, 
    data,
    userId:req.session.user_id
    
  });
  
} catch (error) {
  res.status(500).json(error);
}




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
  res.render('add-recipe',{isLoggedIn:true,userId:req.session.user_id });

});



module.exports = router;
