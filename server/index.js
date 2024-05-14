const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const productSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  count: Number,
  size: {
    width: Number,
    height: Number
  },
  weight: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Product = mongoose.model('Product', productSchema);

// Определение схемы и модели для комментариев
const commentSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  description: String,
  date: Date
});

const Comment = mongoose.model('Comment', commentSchema);

app.use(express.json());

// Обработка CRUD операций для продуктов
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.post('/products', async (req, res) => {
  const products = req.body
  for (let i = 0; i < products.length; i++) {
    let el = products[i]
    let product = new Product(el);
    await product.save();
  };
  
  res.send(products);
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.put('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

app.delete('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send(product);
});

// Обработка CRUD операций для комментариев
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

app.listen(3111, () => console.log('Server started on port 3000'));