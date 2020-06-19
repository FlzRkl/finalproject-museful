const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

//Init Middleware
// app.use(bodyParser.json())
app.use(
  express.json({
    extended: false,
  })
);

app.get('/', (req, res) => res.send('API Running ...'));

//Define Routes
// app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/listItem', require('./routes/api/listItem'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
