const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* ---------------- MONGODB CONNECTION ---------------- */

mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


/* ---------------- USER SCHEMA ---------------- */

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        minlength: 2
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    }
});

const User = mongoose.model("User", userSchema);


/* ---------------- ROUTES ---------------- */

/* 1. GET ALL USERS */

app.get("/users", async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});


/* 2. GET USER BY ID */

app.get("/users/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        res.json(user);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});


/* 3. POST ONE USER */

app.post("/users", async (req,res)=>{
    try{
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});


/* 4. POST MULTIPLE USERS */

app.post("/users/many", async (req,res)=>{
    try{
        const users = await User.insertMany(req.body);
        res.status(201).json(users);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});


/* 5. DELETE USER */

app.delete("/users/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        res.json({message:"User deleted successfully"});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});


/* 6. PUT (FULL UPDATE) */

app.put("/users/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true, runValidators:true }
        );

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        res.json(user);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});


/* 7. PATCH (PARTIAL UPDATE) */

app.patch("/users/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true, runValidators:true }
        );

        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        res.json(user);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});


/* ---------------- SERVER ---------------- */

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});