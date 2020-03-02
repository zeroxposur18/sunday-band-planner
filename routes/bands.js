var express = require('express');
var router = express.Router();
var bandsCtrl = require('../controllers/bands');

/* GET users listing. */
router.get('/', bandsCtrl.index);
router.get('/:id', bandsCtrl.show);
router.get('/new', bandsCtrl.new);
router.post('/', bandsCtrl.create);


module.exports = router;
