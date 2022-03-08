const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage',{
      isLoggedIn:true
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

  res.render('profile');
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
