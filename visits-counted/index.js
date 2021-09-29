const express = require('express');
const redis = require('redis');

const port = 8000;
const app = express();
const client = redis.createClient({
    host: 'redis-server'
});
client.set('visits', 1)

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('This is the homepage visit ' + visits);
        client.set('visits', parseInt(visits) + 1)
    })
});

app.listen(port, () => {
    console.log(`app started on port ${port}`)
})