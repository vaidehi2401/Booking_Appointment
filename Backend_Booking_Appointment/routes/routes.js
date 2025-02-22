const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();
router.post('/add-user', controller.postUsers);
router.get('/get-user', controller.getUsers)
router.delete('/delete-user/:id', controller.delete)
router.get('/get-userbyId/:id', controller.getById)
module.exports=router;