const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(express.static('node_modules'));
app.use(express.static('assets'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
