const router = require('express').Router();
const User = require('../../models/User');

// # Create: New user, rooute for 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// # Login: Route for existing user log in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findByPk( req.body.login );

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username/email or password'});
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username/email or password'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: `You are now logged in as ${userData.username}!`})
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// # Logout: Route for logging out of current session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
