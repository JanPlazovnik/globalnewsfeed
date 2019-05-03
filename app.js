const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'))

/*
app.use(express.static(path.join(__dirname)));
app.use("/assets", express.static(__dirname + '/assets'));

process.env.PWD = process.cwd();
app.use('/assets', express.static(process.env.PWD + '/assets'));*/

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
