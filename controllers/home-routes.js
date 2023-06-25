const router = require('express').Router();
const { Inventory, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll({
      order: [['product_name', 'ASC']],
    });

    const inventories= inventoryData.map((product) => product.get({ plain: true }));

    console.log(inventories)

    res.render('homepage', {
      inventories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
