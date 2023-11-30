//* Error Page Server 

const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Render the EJS file
app.get('/', (req, res) => {
    res.render('index');
});

// Handle button click
app.post('/error', (req, res) => {
    // Your error handling logic here
    res.render('error'); // Rendering the error page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
