const User = require("./models/users");
const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const routes = require('./routes/routes');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
app.use('/user', routes);
sequelize.sync()
.then((result)=>{
    app.listen(3001)
})
.catch((err)=>{
    console.log(err)
    
})
