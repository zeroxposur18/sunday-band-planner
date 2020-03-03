var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

router.get('/skills/new', skillsCtrl.new);
router.post('/skills', skillsCtrl.create);
router.post('/bands/:id/skills', skillsCtrl.addToBand);

module.exports = router;