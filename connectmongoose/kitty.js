const mongoose=require('mongoose')
const kittySchema = new mongoose.Schema({
    name: String
  });
 const Kitten = mongoose.model('Kitten', kittySchema);
 module.exports=Kitten
