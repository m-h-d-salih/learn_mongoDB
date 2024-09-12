const mongoose = require('mongoose');
const  Kitten=require('./kitty');
const express=require('express');
const app=express();
app.use(express.json())

app.post('/kitten',async (req,res)=>{
   try{
    const kiten=new Kitten(req.body);
    await kiten.save()
    res.status(202).json(kiten)
   }
   catch(err){
    console.log(err)
   }
})
app.get('/kitten',async (req,res)=>{
   try{
    const kiten=await Kitten.find()
    
    res.status(202).json(kiten)
   }
   catch(err){
    console.log(err)
   }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://salihsha656:Nuah1wdYFtvo2wJj@cluster0.9dpvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}