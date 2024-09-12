const express=require('express')
const mongoose= require('mongoose');
const app=express()
const User=require('./user')
app.use(express.json())

app.get('/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.json(users)
    }catch(err){
        console.log(err)
    }
})
app.post('/users',async(req,res)=>{
    try{
        const {name,age}=req.body
    const newuser=new User({name,age})
    await newuser.save()
    res.status(201).json(newuser)
    }catch(err){
        console.log(err)
    }
    
})
app.put('/users/:id',async(req,res)=>{
    try{
        const userid=req.params.id
        const toupdate=req.body
        const updateduser=await User.findByIdAndUpdate(userid,toupdate,{new:true,runValidators:true})
        if(!updateduser)return res.status(404).res.send("user  not fund")
        res.json(updateduser)
    }
    catch(err){
        console.log(err)
    }
})
app.delete('/users/:id',async(req,res)=>{
    try{const userid=req.params.id
    const todelete=req.body
    const deleted=await User.findByIdAndDelete(userid)
    if(!deleted)return res.status(404).json({error:'404 not found'})
    res.status(202).json({message:'user deleted'})}
catch(err){
    console.log(err)
}
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://salihsha656:Dp0z34DEIbguZAkZ@cluster0.4b3xa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(3001,()=>console.log(`listening 3001`))