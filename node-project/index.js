const express = require('express');

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('This is the homepage 1');
});

app.listen(port, () => {
    console.log(`app started on port ${port}`)
})