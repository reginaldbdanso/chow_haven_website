import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { menuItems } from './data/menuItems.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Allow cross-origin resource sharing
app.use(cors({
  origin: ORIGIN
 
}));

// Serve static files in production
if (process.env.APPNODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
}

// API Routes
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  // Here you would typically save the order to a database
  console.log('New order received:', order);
  res.status(201).json({ message: 'Order received successfully', orderId: Date.now() });
});

// Handle client-side routing in production
if (process.env.APPNODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});