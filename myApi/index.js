const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Helper function to read data from JSON file
const readData = () => {
    const data = fs.readFileSync('./data/movies.json');
    return JSON.parse(data);
};

// Helper function to write data to JSON file
const writeData = (data) => {
    fs.writeFileSync('./data/movies.json', JSON.stringify(data, null, 2));
};

// CRUD Operations

// Create a new movie
app.post('/movies', (req, res) => {
    const movies = readData();
    const newMovie = { id: movies.length + 1, ...req.body };
    movies.push(newMovie);
    writeData(movies);
    res.status(201).json(newMovie);
});

// Read all movies
app.get('/movies', (req, res) => {
    const movies = readData();
    res.json(movies);
});

// Read a movie by ID
app.get('/movies/:id', (req, res) => {
    const movies = readData();
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not found');
    res.json(movie);
});

// Update a movie
app.put('/movies/:id', (req, res) => {
    const movies = readData();
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');
    movies[movieIndex] = { id: parseInt(req.params.id), ...req.body };
    writeData(movies);
    res.json(movies[movieIndex]);
});

// Delete a movie
app.delete('/movies/:id', (req, res) => {
    const movies = readData();
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex === -1) return res.status(404).send('Movie not found');
    const deletedMovie = movies.splice(movieIndex, 1);
    writeData(movies);
    res.json(deletedMovie);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});