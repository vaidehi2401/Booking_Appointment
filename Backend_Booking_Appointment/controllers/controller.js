const Expense = require('../models/Expense');
const User = require('../models/users')
exports.getUsers=  async(req, res, next)=>{
        try{
         const users = await User.findAll();
         res.status(200).json({allUsers:users});
        }
        catch(error){
         res.status(500).json({error:error})
        }
     }
exports.postUsers=  async(req , res , next)=>{
        const name = req.body.name;
        const email = req.body.email;
        const phone= req.body.phone;
        const data = await User.create({name:name, email:email, phone:phone});
        res.status(201).json({newUserDetail:data});
    }
exports.delete= async(req, res, next)=>{
        const id =req.params.id;
        try{
        const dUser = await User.destroy({where:{id:id}});
        if(dUser){
            res.status(200).json({ message: "User deleted successfully" });
        }
        }
        catch(err){
            res.status(500).json({ error: "An error occurred while deleting the user" });
        }
        }
exports.getById =async(req, res, next)=>{
    const id =req.params.id;
     User.findByPk(id)
    .then((userp)=>{
        console.log('edit user:' ,userp)
        res.status(200).json(userp);}
    )
}
exports.postExpense=  async(req , res , next)=>{
    const amount = req.body.amount;
    const category = req.body.category;
    const description= req.body.description;
    const data = await Expense.create({amount:amount, category:category, description:description});
    res.status(201).json({newExpenseDetail:data});
}
exports.getExpenses=  async(req, res, next)=>{
    try{
     const expenses = await Expense.findAll();
     res.status(200).json({allUsers:expenses});
    }
    catch(error){
     res.status(500).json({error:error})
    }
 }
 exports.deleteExpense= async(req, res, next)=>{
    const id =req.params.id;
    try{
    const dExpense = await Expense.destroy({where:{id:id}});
    if(dExpense){
        res.status(200).json({ message: "Expense deleted successfully" });
    }
    }
    catch(err){
        res.status(500).json({ error: "An error occurred while deleting the expense" });
    }
    }
    exports.getExpenseById =async(req, res, next)=>{
        const id =req.params.id;
         Expense.findByPk(id)
        .then((expensep)=>{
            console.log('edit user:' ,expensep)
            res.status(200).json(expensep);}
        )
    }