const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World !'));
//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));