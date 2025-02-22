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