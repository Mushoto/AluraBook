const express = require('express');
const app = express();
const port = 3000;
const books = require('./books.json');

app.use(express.static('public'));

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
