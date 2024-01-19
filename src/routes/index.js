const express = require('express');
const router = express.Router();
const validationsForm = require('../validations/validationsForm');

const indexControllers = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', indexControllers.home);
router.post('/', validationsForm, indexControllers.proccesHome);
router.get('/end', indexControllers.pageEnd);
router.get('/logout', indexControllers.logout);

module.exports = router;
