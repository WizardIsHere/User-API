const express = require("express");
const mongoose = require("mongoose");
require('dotenv/config')
const User = require("./model/user")

const app = express();
app.use(express.json());

//To Receive data of all users
app.get('/', async (req,res) =>{
    try{
        const users = await User.find();
        res.json(users)
    }catch(err){
        res.json({message, err})
    }
})

//Specific User
app.get('/:id', async (req,res) =>{
    const user = await User.findById(req.params.id)
    res.json(user)
})


// To save new User
app.post("/create_user", async(req, res) => {
    try{
        const myUser = new User(req.body)
        await myUser.save()
        res.send(myUser);
    }catch(err){
        res.send({message: err})
    }
});


//To get Parameter
app.get("/:create_user",(req,res) =>{
    console.log(req.params.create_user)
})

mongoose.connect(process.env.DB_CONNECTION, (req, res) => {
  console.log("DB Connected");
});

app.listen(3000, () => {
  console.log("Listenning to port 3000");
});
