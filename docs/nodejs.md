# Node.js notes

This file will contain lots of random information about Node.js

## Install Node.js

* Download and install Node.js binary from nodejs.org
* Check version in the terminal `node --version`

## Project Setup

* Create your first Node.js file eg index.js
* Create a basic function, such as a console log: `console.log('hello world');`
* Test it's working by running this file in your terminal `node index.js`
* Run `npm init` and define your project

Your terminal will look something like this

    Press ^C at any time to quit.
    name: (blog)
    version: (1.0.0)
    description: My first blog
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author: Kirsty Rose
    license: (ISC)
    About to write to /Users/kirstyrose/Desktop/blog/package.json:

    {
      "name": "blog",
      "version": "1.0.0",
      "description": "My first blog",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "Kirsty Rose",
      "license": "ISC"
    }


    Is this ok? (yes)

This will create a package.json file

Running `npm test` in the terminal should return something like this

    > blog@1.0.0 test /Users/kirstyrose/Desktop/blog
    > node src/index.js

    test

## Setting up a server

Go to https://nodejs.org/en/about/ and copy paste the following into `index.js`

    const http = require('http');

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World\n');
    });

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });

* Define html as the content type, rather than plain text

    res.setHeader('Content-Type', 'text/html');

* In `package.json` switch `test` in `"scripts"` to `"start": "node src/index.js"`
* Run `npm start` in the terminal

It should return something like this

    > blog@1.0.0 start /Users/kirstyrose/Desktop/blog
    > node src/index.js

    Server running at http://127.0.0.1:3000/

Running this in the browser should return "Hello World"
