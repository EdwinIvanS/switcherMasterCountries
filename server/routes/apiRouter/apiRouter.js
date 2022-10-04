var express = require('express');
var router = express.Router();
const apiMainController = require('../../controllers/apiController/apiController');

/* GET home page. */
router.get('/paises', apiMainController.paises);
router.get('/pais/:id', apiMainController.nombrePais);
router.get('/region/:region', apiMainController.filtroRegion);

module.exports = router;
