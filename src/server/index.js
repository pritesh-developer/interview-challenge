const express = require('express');
const items = require('./items');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', (req, res) => res.send({ items }));

app.get('/api/items/:searchString', (req, res) => { 
    const searchedItems = items.filter((item)=> item.name.toLowerCase().includes(req.params.searchString.toLowerCase()));
    const filterItems = searchedItems.length >0  ? searchedItems : items;
    res.send({ searchedItems:filterItems })
    }
    );

app.listen(port, () => console.log(`Listening on port ${port}!`));
