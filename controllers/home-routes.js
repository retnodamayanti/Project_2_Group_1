const router = require('express').Router();
const { Inventory, User } = require('../models');
const withAuth = require('../utils/auth');


//router.get('/', withAuth, async (req, res) => {
  router.get('/', async (req, res) => {
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
// GET one product
router.get('/product/:id', async (req, res) => {
  try {
    const product = await Inventory.findByPk(req.params.id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    // Render the product details page with the retrieved product data
    res.render('product', {
      product: product.get({ plain: true }),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

