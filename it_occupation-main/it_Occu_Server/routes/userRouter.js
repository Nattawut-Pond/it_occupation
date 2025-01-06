const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const occupationRouter = require('../controllers/occupation.js');
// ตัวอย่าง route GET users
router.get('/users/:id', userController.getUserById);


// ตัวอย่าง route POST users
router.post('/login', userController.loginUser);
router.post('/register', userController.createUser);

router.get('/occupation', occupationRouter.getAllOccupation);
router.get('/question/:id', occupationRouter.getQuestionByOccupation);

module.exports = router;