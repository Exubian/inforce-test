const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const PORT = 3111;

const app = express();

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const productSchema = new mongoose.Schema({
  imageUrl: { type: String, default: '' },
  name: { type: String, default: '' },
  count: { type: Number, default: 0 },
  size: {
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 } 
  },
  weight: { type: String, default: '' },
  comments: { type: [String], default: [] }
});

const Product = mongoose.model('Product', productSchema);

app.use(express.json());
app.use(cors())

app.get('/products', async (req, res) => {
  const products = processData(await Product.find());
  res.send(products);
});

// app.post('/products/fill', async (req, res) => {
  
//   const products = [];

//   for (let i = 0; i < req.body.length; i++) {
//     let el = req.body[i];
//     let product = new Product(el);
//     await product.save();
//     products.push(product);
//   };
  
//   res.send(products);
// });

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();

  res.send(product);
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.patch('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});
// app.patch('/products/img', async (req, res) => {
//   const products = []
//   // console.log(req.body)
//   for (let el of req.body) {
//     // console.log(el);
//     const { imageUrl } = el;
    
//     const product = await Product.findByIdAndUpdate(el.id, {imageUrl}, { new: true });
//     if (!product) return res.status(404).send('Product not found');
    
//     products.push(product)
//   }
//   res.send(products);
// });

app.delete('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

function processData(data) {
  if (Array.isArray(data)) {
      return data.map(item => {
          const { _id, ...rest } = item.toObject();
          return { id: _id, ...rest };
      });
  } else {
      const { _id, ...rest } = data.toObject();
      return { id: _id, ...rest };
  }
};