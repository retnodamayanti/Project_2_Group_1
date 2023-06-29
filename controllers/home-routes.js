const router = require('express').Router();
const { Inventory, User, Category } = require('../models');
const withAuth = require('../utils/auth');
const path = require('path');
const fs = require('fs');

// GET all categories for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Inventory,
          attributes: ['filename'],
        },
      ],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    
    // retrieve the logged-in user's information
    const userId = req.session.user_id;
    const user = await User.findByPk(userId);
    const username = user.username;

    res.render('homepage', {
      categories,
      logged_in: req.session.logged_in,
      username, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Inventory,
            attributes: [
              'id',
              'product_name',
              'quantity',
              'filename',
              'description',
            ],
          },
        ],
      });
      const category = categoryData.get({ plain: true });
      console.log(category)
      res.render('category', { 
        category, 
        logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
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

    // retrieve the logged-in user's information
    const userId = req.session.user_id;
    const user = await User.findByPk(userId);
    const username = user.username;

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
