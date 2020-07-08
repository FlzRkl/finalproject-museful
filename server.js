const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
const clientPath = path.join(__dirname, 'client', 'build');

// finalproject/client/build

// Connect Database
connectDB();

//Init Middleware
// app.use(bodyParser.json())
app.use(
  express.json({
    extended: false,
  })
);
app.use(express.static(clientPath));

//app.get('/', (req, res) => res.send('API Running ...'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/listItem', require('./routes/api/listItem'));

app.use('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
