const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { application } = require('express');
const bcrypt = require('bcrypt');

require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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

app.post('/api/register', (req, res) => {
    const userData = req.body.userData;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(userData.password, saltRounds);

    const addUser = `INSERT INTO users VALUES (null, '${userData.email}', '${userData.name}', '${hashedPassword}')`;

        db.query(addUser, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
})

app.post('/api/getpassword', (req, res) => {
    const loginData = req.body.loginData;

    const getUserData = `SELECT * FROM users WHERE email='${loginData.email}'`;

    db.query(getUserData, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            const isPasswordMatch = bcrypt.compareSync(loginData.password, result[0].password)
            res.send(isPasswordMatch);
        }
    })
})


app.listen(3001, () => {
    console.log('running');
})