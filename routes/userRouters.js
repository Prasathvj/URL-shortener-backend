const express = require('express');
const { signUp, logIn, forgotPassword, resetPassword } = require('../controllers/userContoller');

const router = express.Router()

router.post('/signup',signUp);
router.post('/login',logIn);
router.post('/forgot/password',forgotPassword);
router.post('/reset/password/:token',resetPassword);

module.exports = router;