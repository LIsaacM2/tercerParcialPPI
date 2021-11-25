var express = require('express');
var router = express.Router();
var controller = require('../controllers/citas.controllers');

router.post('/createCita', controller.createCita);
router.post('/readCitas', controller.readCitas);


module.exports = router;