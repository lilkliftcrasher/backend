const express  = require('express');
const router = express.Router();
const { getService, setService }  = require('../controllers/serviceControllers')

router.get('/', getService)
router.post('/', setService)



module.exports = router;