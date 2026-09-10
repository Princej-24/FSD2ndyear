import express from 'express';
import fs from 'fs';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading HTML file');
            return;
        }

        res.send(data);
    });
});


app.get('/about', (req, res) => {
    fs.readFile('./about.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading about.html');
            return;
        }

        res.send(data);
    });
});


app.get('/contact', (req, res) => {
    fs.readFile('./contact.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading contact.html');
            return;
        }

        res.send(data);
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});