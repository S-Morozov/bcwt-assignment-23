'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUserList);
//router.get('/:userId', userController.getUser);
router.get('/token', userController.checkToken);

router.post('/', userController.postUser);

// TODO: add other endpoints needed
// TODO: add validation & sanitization

module.exports = router;