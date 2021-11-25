var express = require('express');
var router = express.Router();
var controller = require('../controllers/services.controllers');

router.post('/createService', controller.createService);
router.post('/readServices', controller.readServices);
router.put('/updateService/:id', controller.updateService);
router.put('/deleteService/:id', controller.deleteService);

module.exports = router;
