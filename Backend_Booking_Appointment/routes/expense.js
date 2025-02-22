const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();
router.post('/add-expense', controller.postExpense);
router.get('/get-expense', controller.getExpenses)
router.delete('/delete-expense/:id', controller.deleteExpense)
router.get('/get-ExpensebyId/:id', controller.getExpenseById)
module.exports=router;