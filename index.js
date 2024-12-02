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
const PORT = process.env.PORT;

app.use(express.json());

// log request path, method and timestamp
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()} - ${res.statusCode}`);
  next();
});

if (process.env.BNODE_ENV !== 'production') {

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];

// Allow requests from the allowed origins
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
} else {

// Serve static files in production
  app.use(express.static(join(__dirname, './dist')));

// Handle client-side routing in production
  app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './dist/index.html'));
  });

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

//handle 404
// app.use((req, res, next) => {
//   res.status(404).send('<h1>404 Not Found</h1>');
// });



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});