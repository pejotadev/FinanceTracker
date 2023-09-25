const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Routes
const userRoutes = require('./Routes/UserRoutes.js');
const walletRoutes = require('./Routes/WalletRoutes.js');
const databaseRoutes = require('./Routes/CreateDatabaseRoutes.js');
const tagsRoutes = require('./Routes/tagRoutes.js');

// Middleware configuration
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(cors());
app.use(passport.initialize());

// Route middleware
app.use('/api/database', databaseRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/tags', tagsRoutes);

// Port
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});