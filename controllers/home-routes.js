const router = require('express').Router();
const { Inventory, User, Tools } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const fs = require('fs');

router.get('/', withAuth, async (req, res) => {
  try {
    const inventoryData = await Inventory.findAll({
      order: [['product_name', 'ASC']],
    });

    const inventories= inventoryData.map((product) => product.get({ plain: true }));

    const toolsData = await Tools.findAll({
      order: [['product_name', 'ASC']],
    });

    const tools = toolsData.map((product) => product.get({ plain: true }));

    // Read the user data from the JSON file
    const filePath = path.join(__dirname, '../seeds/userData.json');
    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const username = userData[0].username;

    res.render('homepage', {
      inventories,
      tools,
      logged_in: req.session.logged_in,
      username: username
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

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// GET one product
router.get('/product/:id', async (req, res) => {
  try {
    const product = await Inventory.findByPk(req.params.id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // Read the user data from the JSON file
    const filePath = path.join(__dirname, '../seeds/userData.json');
    const userData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const username = userData[0].username;

    res.render('product', {
      product: product.get({ plain: true }),
      logged_in: req.session.logged_in,
      username: username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
