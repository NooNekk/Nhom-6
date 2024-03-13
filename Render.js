const { readFileSync } = require('node:fs');



function RenderHomePage(pathFile, res, configString) {
    res.setHeader('Content-Type', 'text/html');
    try {
        var data = readFileSync(pathFile);
        res.statusCode = 200;
        res.write(data);
        res.end();
    } catch(err) {
        res.statusCode = 404;
        res.write(configString.MESSAGE_FILE_NOT_FOUND);
        res.end();
    }
}

function RenderAboutPage(pathFile, res, configString) { 
    res.setHeader('Content-Type', 'text/html');
    try {
        var data = readFileSync(pathFile);
        res.statusCode = 200;
        res.write(data);
        res.end();
    } catch(err) {
        res.statusCode = 404;
        res.write(configString.MESSAGE_FILE_NOT_FOUND);
        res.end();
    }
}

function RenderContactPage(pathFile, res, configString) { 
    res.setHeader('Content-Type', 'text/html');
    try {
        var data = readFileSync(pathFile);
        res.statusCode = 200;
        res.write(data);
        res.end();
    } catch(err) {
        res.statusCode = 404;
        res.write(configString.MESSAGE_FILE_NOT_FOUND);
        res.end();
    }
}

function RenderUserPage(pathFile, res, configString) { 
    res.setHeader('Content-Type', 'text/html');
    try {
        var data = readFileSync(pathFile);
        res.statusCode = 200;
        res.write(data);
        res.end();
    } catch(err) {
        res.statusCode = 404;
        res.write(configString.MESSAGE_FILE_NOT_FOUND);
        res.end();
    }
}

module.exports = {
    RenderHomePage: RenderHomePage,
    RenderAboutPage: RenderAboutPage,
    RenderContactPage: RenderContactPage,
    RenderUserPage: RenderUserPage
};