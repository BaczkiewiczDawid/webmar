const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webmar'
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const getPosts = 'SELECT * FROM posts';
    db.query(getPosts, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
})

app.listen(3001, () => {
    console.log('running');
})