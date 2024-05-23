const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You see, i got my degree and then i was like lets just go on this path that is unknown you know?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
