var express = require('express');
var router = express.Router();

var home = require('./home');
var posts = require('./PostData');
var InternshipsData = require('./InternshipData')

module.exports = function(app) {
    // app.use(openEndpoints());
    router.use('/', home);
    router.use('/posts', posts);
    router.use('/internships', InternshipsData);
    return router;
}