const express = require('express')
const app = express()
const port = 3001
const Product = require("./user")
const mongoose = require('mongoose');

app.use(express.json())


app.get('/products', async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(202).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.post('/products', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  app.put('/products', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  

// getting-started.js


main().then("running").catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://salihsha656:gR2MBmE3pDORVHNX@cluster0.t9ygp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}
