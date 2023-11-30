//* Form Validation Server 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static('public'));

// Route for serving the form
app.get('/', (req, res) => {
    res.render('form', { error: null });
});

// Route for handling form submission
app.post('/', (req, res) => {
    const { email, password } = req.body;
    const errors = [];

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        errors.push('Invalid email address');
    }

    // Password validation
    if (password.length < 6) {
        errors.push('Password should be at least 6 characters long');
    }

    // If there are errors, render the form again with error messages
    if (errors.length > 0) {
        res.render('form', { error: errors[0] });
    } else {
        // If no errors, you can handle the form data as needed
        // For now, we'll just send a success message
        res.send('Form submitted successfully');
        res.render('submit');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});