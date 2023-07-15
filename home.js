const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.html');
const insertion = fs.readFileSync('./insertion.html');
const selection = fs.readFileSync('./selection.html');
const bubble = fs.readFileSync('./bubble.html');
const merge = fs.readFileSync('./merge.html');
const quick = fs.readFileSync('./quick.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);

    if(url == '/home'){
        res.end(home);
    }
    else if(url == '/insertion'){
        res.end(insertion);
    }
    else if(url == '/selection'){
        res.end(selection);
    }
    else if(url == '/bubble'){
        res.end(bubble);
    }
    else if(url == '/merge'){
        res.end(merge);
    }
    else if(url == '/quick'){
        res.end(quick);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });