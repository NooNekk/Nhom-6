const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');
// const utuil = require('node:util');
const configString = require('./config/configString');
const Render = require('./Render');

const server = http.createServer((req, res) => {
    var path = url.parse(req.url, true).pathname;
    switch(path) {
        case "/":
        case "/home" : {
            Render.RenderHomePage('./view/homepage.html', res);
            break;
        }
        case "/about" : {
            Render.RenderAboutPage('./view/about.html', res);
            break;
        }
        case "/contact" : {
            Render.RenderContactPage('./view/contact.html', res);
            break;
        }
        case "/user" : {
            Render.RenderUserPage('./view/user.html', res);
            break;
        }

        default: {
            res.statusCode = 404;
            res.write(configString.MESSAGE_FILE_NOT_FOUND);
            res.end();
            break;
        }
    }
});




server.listen(configString.port, configString.hostname, () => {
  console.log(configString.MESSAGE_SERVER_RUNNING);
});