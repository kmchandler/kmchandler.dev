const express = require('express');
const path = require('path'); // Node.js built-in module for working with file paths

const app = express();
const port = 3000; // You can choose any port you like

// Serve static files from the 'public' directory
// If your index.html is directly in the root, you can point to '.' or specify the directory
app.use(express.static(path.join(__dirname)));
// If your index.html is in the root and you don't want a 'public' folder, you can use:
// app.use(express.static(__dirname));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    // If your index.html is directly in the root, use:
    // res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
