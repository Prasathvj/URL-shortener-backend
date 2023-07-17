const express = require('express');
const { createUrl, allUrl, redirectUrl, deleteUrl } = require('../controllers/urlController');
const { authentication } = require('../middleware/authendication');
const router = express.Router();

router.post('/createUrl',authentication, createUrl);
router.get('/allUrl/:id',authentication, allUrl);
router.get('/shortUrl/:shortUrl',redirectUrl);
router.delete('/delete/:id',authentication, deleteUrl)

module.exports = router;