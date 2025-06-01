
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount the user routes
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});