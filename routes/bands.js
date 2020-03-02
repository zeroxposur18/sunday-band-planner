var express = require('express');
var router = express.Router();
var bandsCtrl = require('../controllers/bands');

/* GET users listing. */
router.get('/', bandsCtrl.index);
router.get('/member', isLoggedIn, bandsCtrl.member)
router.get('/:id', bandsCtrl.show)
router.get('/new', isLoggedIn, bandsCtrl.new)
router.post('/', bandsCtrl.create);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}


module.exports = router;
