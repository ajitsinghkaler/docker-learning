const express = require('express');
const redis = require('redis');

const port = 5000;
const app = express();
const client = redis.createClient();
client.set('visits', 0)

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('This is the homepage visit ' + visits);
        client.send('visits', parseInt(visits) + 1)
    })
});

app.listen(port, () => {
    console.log(`app started on port ${5000}`)
})