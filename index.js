const http = require('http');
const url = require('url');rm -rf

const server = http.createServer((req, res,) => {
    const urlobj = url.parse(req.url, true);
    const recipies = urlobj.recipies;
    console.log (recipies);
});

    const hostname = localhost
    const port = 3000

    server.listen(port, hostname, () => {
    console.log('the server is running at', `${hostname}:${port}`)
})

npx express-generator --no-view <jersey.json>

var express = require('express');
var router = express.Router();
const fs = require('fs'); 

const RECIPIES_FILE = './recipies.json';

router.get('/', function (req, res, next) {
    fs.readFile(RECIPIES_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;
        }

        res.json(JSON.parse(data));
            const newRecipies = {
            id: (recipies.length + 1).toString(),
            name: req.body.params,
        }
    })
});

router.get('/recipies/:id', function (req, res) {
    console.log(recipiesId")
    fs.readFile(RECIPIES_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
        data = JSON.parse(data)
        console.log(data)
        const id = req.params.id
        let recipies = data.find((recipies) => {
            console.log(recipies)
            return recipies.id === id
        })
        res.json(JSON.parse(recipies)); 
});
})

router.post('/', (req, res) => {
    fs.readFile(RECIPIES_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file')
            return;

        }
   
        const pets = JSON.parse(data);

        const newRecipies = {
            id: (recipies.length + 1)
        }

      recipies.push(newRecipies)

        
        fs.writeFile(recipies_FILE, JSON.stringify(recipies), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem writing the file')
                return;

            }
            res.json(newRecipies) 

        })
    })


})


module.exports = router;