const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
 
  Category.findAll({
    include: [{ model: Product }]
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  
  Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  }).then((categoryData) => {
    res.json(categoryData);
  })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    });
});

router.put('/:id', (req, res) => {
  
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delCategory) => {
      res.json(delCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
