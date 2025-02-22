const User = require("./models/users");
const Expense = require("./models/Expense")
const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const routes = require('./routes/routes');
const expense = require('./routes/expense')
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
app.use('/user', routes);
app.use('/expense', expense)
sequelize.sync()
.then((result)=>{
    app.listen(3001)
})
.catch((err)=>{
    console.log(err)
    
})
