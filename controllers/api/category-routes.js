const router = require('express').Router();
const { Category } = require('../../models')

//create a category

router.post('/', async (req, res) => {
    try {
      console.log(req.body)
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;