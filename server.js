require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const app = express();

const PORT = process.env.PORT|| 5001;


app.use(express.json());
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks',taskRoutes);

app.get('/',(req,res) => {
    res.send('Task manager API is running!');
});

connectDB();
app.listen(PORT,() => {
    console.log(`Server is running on Port ${PORT}`);
})