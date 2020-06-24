'use strict';
const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController')
const XMLFileController = require('../controllers/XMLController')

router.get('/',PagesController.home);

router.get('/imports', PagesController.imports)
router.get('/exports', PagesController.exports)
router.get('/settings', PagesController.settings)

router.post('/file_xml_upload', XMLFileController.storeFile)

module.exports = router;