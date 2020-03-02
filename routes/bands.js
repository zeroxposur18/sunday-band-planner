var express = require('express');
var router = express.Router();
var bandsCtrl = require('../controllers/bands');

/* GET users listing. */
router.get('/', bandsCtrl.index);
router.get('/member', isLoggedIn, bandsCtrl.member)
router.get('/new', isLoggedIn, bandsCtrl.new)
router.get('/:id',isLoggedIn, bandsCtrl.show)
router.post('/', isLoggedIn, bandsCtrl.create);
router.delete('/:id',isLoggedIn, bandsCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}


module.exports = router;
