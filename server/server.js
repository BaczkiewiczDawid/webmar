const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { application } = require('express');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webmar'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const getPosts = 'SELECT * FROM posts';

    db.query(getPosts, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    });
})

app.post('/api/likes', (req, res) => {
    const isLiked = req.body.isLiked;
    const id = req.body.id;

    let giveLike;

    if (isLiked) {
        giveLike = `UPDATE posts SET likes = likes - 1 WHERE id=${id}`;
    } else {
        giveLike = `UPDATE posts SET likes = likes + 1 WHERE id=${id}`;
    }

    db.query(giveLike, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post('/api/new', (req, res) => {
    const newPost = req.body.newPost;

    const insertPost = `INSERT INTO posts VALUES (null, '${newPost.user}', '${newPost.description}', 1, ${newPost.likes}, '${newPost.location}')`;

    db.query(insertPost, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('running');
})