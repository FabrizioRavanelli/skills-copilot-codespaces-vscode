// create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all comments
app.get('/comments', (req, res) => {
    fs.readFile(__dirname + '/comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// add a comment
app.post('/comments', (req, res) => {
    fs.readFile(__dirname + '/comments.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }

        const comments = JSON.parse(data);
        comments.push(req.body);

        fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments), 'utf8', (err) => {
            if (err) {
                res.status(500).send('Error writing comments.json');
                return;
            }

            res.status(201).send('Comment added');
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});