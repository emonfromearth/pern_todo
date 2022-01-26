const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json())

// CREATE ROUTES
app.post('/', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        res.json(newTodo);
    } catch (error) {
        console.log(error.message);
    }
});

// server is running on port 5000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});